import { COLORS } from "./constants";

import { createTheme } from "@config/stitches.config";

export type TColors = (typeof COLORS)[number];
export type TColorMode = "dark" | "light";

export type TSizes = "large" | "medium" | "small";

// Answer of https://stackoverflow.com/questions/67941433/convert-array-of-strings-to-object-keys-in-typescript
type ObjectFromList<T extends ReadonlyArray<string>, V = string> = {
  [K in T extends ReadonlyArray<infer U> ? U : never]: V;
};

export type TPrimaryColorThemes = ObjectFromList<
  typeof COLORS,
  ReturnType<typeof createTheme>
>;

export type TColorModeThemes = {
  [K in TColorMode]: ReturnType<typeof createTheme>;
};

export type TSkill = {
  name: string;
  slug: string;
  image: string;
};

export type TProjectType = {
  slug: "featured" | "small" | "code-challenge";
  type: "Featured" | "Small" | "Code Challenge";
};

export type TProject = {
  id?: string;
  slug: string;
  name: string;
  githubLink: string;
  liveLink: string;
  skills: TSkill[];
  type: TProjectType;
  finishDate: Date | string;
  description: string;
  coverImage?: string;
  code?: string;
};

export type TContactFormValues = {
  fullName: string;
  email: string;
  message: string;
};

// Polimorfismo de componentes
// Fuente: https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/

// Prop as será cualquier tipo de Elemento React
type AsProp<C extends React.ElementType> = {
  as?: C;
};

// Intersección de las props que serán omitidas usando Omit
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

// Extiende las propiedades del Componente
// agrega children y cualquier prop aceptada por "as"
// ejemplo: si as = a -> "href" será prop valida
// Nota: Si las props del Componente también son validas por la etiqueta HTML el type estará dado por la prop del Component
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

// Extendemos las props para que el component pueda aceptar una ref
export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };
