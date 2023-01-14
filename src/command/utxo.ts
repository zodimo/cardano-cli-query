import {
  BooleanCommandParameter,
  Builder,
  Command,
  CommandOptions,
  Network,
  NetworkBuilder,
  NodeMode,
  NodeModeBuilder,
  OutFile,
  OutFileBuilder,
  StringCommandParameter,
} from '@zodimo/cardano-cli-base';

export enum UtxoFilters {
  ADDRESS = 'address',
  TX_IN = 'tx-in',
}
export class UtxoFilterBuilder {
  address(value: string): UtxoFilter {
    return UtxoFilter.address(value);
  }
  txIn(value: string): UtxoFilter {
    return UtxoFilter.txIn(value);
  }
}

export class UtxoFilter extends StringCommandParameter {
  constructor(paramKey: UtxoFilters, paramValue: string) {
    super(paramKey, paramValue);
  }
  static address(value: string): UtxoFilter {
    return UtxoFilter.from(UtxoFilters.ADDRESS, value);
  }
  static txIn(value: string): UtxoFilter {
    return UtxoFilter.from(UtxoFilters.TX_IN, value);
  }
}

export class UtxoOptions implements CommandOptions {
  private nodeMode?: NodeMode;
  private network?: Network;
  private wholeUtxo?: BooleanCommandParameter;
  private utxofilter?: UtxoFilter;
  private outFile?: OutFile;

  withNodeMode(builder: Builder<NodeModeBuilder, NodeMode>): UtxoOptions;
  withNodeMode(value: NodeMode): UtxoOptions;
  withNodeMode(value: NodeMode | Builder<NodeModeBuilder, NodeMode>): UtxoOptions {
    if (typeof value !== 'function') {
      this.nodeMode = value;
      return this;
    }
    this.nodeMode = value(new NodeModeBuilder());
    return this;
  }

  withNetwork(builder: Builder<NetworkBuilder, Network>): UtxoOptions;
  withNetwork(value: Network): UtxoOptions;
  withNetwork(value: Network | Builder<NetworkBuilder, Network>): UtxoOptions {
    if (typeof value !== 'function') {
      this.network = value;
      return this;
    }

    this.network = value(new NetworkBuilder());
    return this;
  }

  withWholeUtxo(): UtxoOptions {
    this.wholeUtxo = BooleanCommandParameter.from('whole-utxo');
    return this;
  }

  withUtxoFilter(builder: Builder<UtxoFilterBuilder, UtxoFilter>): UtxoOptions;
  withUtxoFilter(value: UtxoFilter): UtxoOptions;
  withUtxoFilter(value: UtxoFilter | Builder<UtxoFilterBuilder, UtxoFilter>): UtxoOptions {
    if (typeof value !== 'function') {
      this.utxofilter = value;
      return this;
    }

    this.utxofilter = value(new UtxoFilterBuilder());
    return this;
  }

  withOutFile(builder: Builder<OutFileBuilder, OutFile>): UtxoOptions;
  withOutFile(value: OutFile): UtxoOptions;
  withOutFile(value: OutFile | Builder<OutFileBuilder, OutFile>): UtxoOptions {
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
    if (this.wholeUtxo) {
      output.push(this.wholeUtxo.toString());
    }
    if (this.utxofilter) {
      output.push(this.utxofilter.toString());
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

export class Utxo extends Command<UtxoOptions> {
  getCommandName(): string {
    return 'utxo';
  }
}
