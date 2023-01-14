import {
  Builder,
  Command,
  CommandOptions,
  Network,
  NetworkBuilder,
  NodeMode,
  NodeModeBuilder,
  OutFile,
  OutFileBuilder,
} from '@zodimo/cardano-cli-base';

export class TipOptions implements CommandOptions {
  private nodeMode?: NodeMode;
  private network?: Network;
  private outFile?: OutFile;

  withNodeMode(builder: Builder<NodeModeBuilder, NodeMode>): TipOptions;
  withNodeMode(value: NodeMode): TipOptions;
  withNodeMode(value: NodeMode | Builder<NodeModeBuilder, NodeMode>): TipOptions {
    if (typeof value !== 'function') {
      this.nodeMode = value;
      return this;
    }
    this.nodeMode = value(new NodeModeBuilder());
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): TipOptions;
  withNetwork(value: Network): TipOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): TipOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withOutFile(builder: Builder<OutFileBuilder, OutFile>): TipOptions;
  withOutFile(value: OutFile): TipOptions;
  withOutFile(value: OutFile | Builder<OutFileBuilder, OutFile>): TipOptions {
    if (typeof value !== 'function') {
      this.outFile = value;
      return this;
    }
    this.outFile = value(new OutFileBuilder());
    return this;
  }

  toString(): string {
    const output: string[] = [];

    if (this.nodeMode) {
      output.push(this.nodeMode.toString());
    }
    if (this.network) {
      output.push(this.network.toString());
    }
    if (this.outFile) {
      output.push(this.outFile.toString());
    }

    return output.join(' ');
  }
}
export class Tip extends Command<TipOptions> {
  getCommandName(): string {
    return 'tip';
  }
}
