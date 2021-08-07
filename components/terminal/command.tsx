export type Command = {
  input: string;
  output?: string;
  workingDirectory: string;
};

export const baseCommand = (workingDirectory: string) => ({
  input: "",
  output: null,
  workingDirectory,
});
