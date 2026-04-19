import { PropsWithChildren } from "react";
import classNames from "classnames";

export interface HeadingProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5;
}

export const Heading = ({ level = 1, children }: HeadingProps) => {
  const Tag = `h${level}`;

  return (
    <Tag
      className={classNames("ich bin immer das", {
        "text-sm": 1 === level,
        "text-base": 2 === level,
        "text-lg": 3 === level,
        "text-xl": 4 === level,
        "text-2xl": 5 === level,
      })}
    >
      {children}
    </Tag>
  );
};
