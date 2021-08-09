export interface Command {
  name: string;
  call: (args: string[]) => string;
  help: (verbose: boolean) => string;
}

export function splitInputs(rawInput: string) {
  const commands: string[][] = [];
  const rawPieces = rawInput.split(" ").filter(piece => piece !== "");
  
  rawPieces.forEach(piece => {
    // TODO process pieces into separate commands
  });
}

export type HistoryLog = {
  input: string;
  output?: string;
  workingDirectory: string;
};

export const baseHistoryLog = (workingDirectory: string) => ({
  input: "",
  output: null,
  workingDirectory,
});
