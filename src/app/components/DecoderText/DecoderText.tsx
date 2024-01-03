import React, { useEffect, useRef } from "react";
import { useInView, useReducedMotion, useSpring } from "framer-motion";
import { delay } from "@/app/utils/delay";

// prettier-ignore
const glyphs = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ', 'ー',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヰ', 'ヱ', 'ヲ', 'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ',
    'パ', 'ピ', 'プ', 'ペ', 'ポ',
];

const CharType = {
  Glyph: "glyph",
  Value: "value",
};

function shuffle(content: any[], output: { value: any }[], position: number) {
  return content.map((value: any, index: number) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

interface DecoderTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const DecoderText: React.FC<DecoderTextProps> = ({
  text,
  delay: startDelay = 0,
  className,
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const output = useRef([{ type: CharType.Glyph, value: "" }]);
  const container = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

  useEffect(() => {
    const containerInstance = container.current;
    const content = text.split("");

    const renderOutput = () => {
      const characterMap = output.current.map(
        (item) => `<span>${item.value}</span>`,
      );

      if (containerInstance) {
        containerInstance.innerHTML = characterMap.join("");
      }
    };

    const unsubscribeSpring = decoderSpring.on("change", (value) => {
      output.current = shuffle(content, output.current, value);
      renderOutput();
    });

    const startSpring = async () => {
      await delay(startDelay);
    };
    if (isInView && !reduceMotion) {
      startSpring().then(() => decoderSpring.set(content.length));
    }
    if (reduceMotion) {
      output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index],
      }));
      renderOutput();
    }

    return () => {
      unsubscribeSpring?.();
    };
  }, [decoderSpring, reduceMotion, startDelay, text, isInView]);

  return (
    <span className={className} {...rest}>
      <span aria-hidden ref={container}>
        <span className="inline-block" ref={ref} />
      </span>
    </span>
  );
};

export default DecoderText;
