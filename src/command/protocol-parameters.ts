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

export class ProtocolParametersOptions implements CommandOptions {
  private nodeMode?: NodeMode;
  private network?: Network;
  private outFile?: OutFile;

  withNodeMode(builder: Builder<NodeModeBuilder, NodeMode>): ProtocolParametersOptions;
  withNodeMode(value: NodeMode): ProtocolParametersOptions;
  withNodeMode(value: NodeMode | Builder<NodeModeBuilder, NodeMode>): ProtocolParametersOptions {
    if (value instanceof NodeMode) {
      this.nodeMode = value;
      return this;
    }
    this.nodeMode = value(new NodeModeBuilder());
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): ProtocolParametersOptions;
  withNetwork(value: Network): ProtocolParametersOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): ProtocolParametersOptions {
    if (value instanceof Network) {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withOutFile(builder: Builder<OutFileBuilder, OutFile>): ProtocolParametersOptions;
  withOutFile(value: OutFile): ProtocolParametersOptions;
  withOutFile(value: OutFile | Builder<OutFileBuilder, OutFile>): ProtocolParametersOptions {
    if (value instanceof OutFile) {
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

export class ProtocolParameters extends Command<ProtocolParametersOptions> {
  getCommandName(): string {
    return 'protocol-parameters';
  }
}
