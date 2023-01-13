export class Query {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} query`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Query {
    return new Query(cardniCliBinPath);
  }
}
