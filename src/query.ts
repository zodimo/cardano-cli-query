import { Builder } from '@zodimo/cardano-cli-base';
import { ProtocolParameters, ProtocolParametersOptions } from './command/protocol-parameters';
import { Tip, TipOptions } from './command/tip';
import { Utxo, UtxoOptions } from './command/utxo';

export class Query {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} query`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Query {
    return new Query(cardniCliBinPath);
  }

  // protocol-parameters

  protocolParameters(builder: Builder<ProtocolParametersOptions, ProtocolParametersOptions>): ProtocolParameters;
  protocolParameters(options: ProtocolParametersOptions): ProtocolParameters;
  protocolParameters(
    value: ProtocolParametersOptions | Builder<ProtocolParametersOptions, ProtocolParametersOptions>,
  ): ProtocolParameters {
    if (typeof value !== 'function') {
      return new ProtocolParameters(this.commandPrefix, value);
    }

    const options = value(new ProtocolParametersOptions());
    return this.protocolParameters(options);
  }

  // tip

  tip(builder: Builder<TipOptions, TipOptions>): Tip;
  tip(options: TipOptions): Tip;
  tip(value: TipOptions | Builder<TipOptions, TipOptions>): Tip {
    if (typeof value !== 'function') {
      return new Tip(this.commandPrefix, value);
    }

    const options = value(new TipOptions());
    return this.tip(options);
  }

  // stake-pools
  stakePools() {
    throw new Error('Not yet implemented!');
  }
  // stake-distribution
  stakeDistribution() {
    throw new Error('Not yet implemented!');
  }
  // stake-address-info
  stakeAddressInfo() {
    throw new Error('Not yet implemented!');
  }

  // utxo

  utxo(builder: Builder<UtxoOptions, UtxoOptions>): Utxo;
  utxo(options: UtxoOptions): Utxo;
  utxo(value: UtxoOptions | Builder<UtxoOptions, UtxoOptions>): Utxo {
    if (typeof value !== 'function') {
      return new Utxo(this.commandPrefix, value);
    }

    const options = value(new UtxoOptions());
    return this.utxo(options);
  }

  // ledger-state
  ledgerState() {
    throw new Error('Not yet implemented!');
  }
  // protocol-state
  protocolState() {
    throw new Error('Not yet implemented!');
  }
  // stake-snapshot
  stakeSnapshot() {
    throw new Error('Not yet implemented!');
  }
  // pool-params
  poolParams() {
    throw new Error('Not yet implemented!');
  }
  // leadership-schedule
  leadershipSchedule() {
    throw new Error('Not yet implemented!');
  }
  // kes-period-info
  kesPeriodInfo() {
    throw new Error('Not yet implemented!');
  }
}
