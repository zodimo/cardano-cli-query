export class Query {
  public readonly commandPrefix: string;
  constructor(commandPrefix: string) {
    this.commandPrefix = `${commandPrefix} query`;
  }

  static createWithCardanoCliBin(cardniCliBinPath = 'cardano-cli'): Query {
    return new Query(cardniCliBinPath);
  }

  // protocol-parameters

  protocolParameters() {
    throw new Error('Not yet implemented!');
  }
  // tip
  tip() {
    throw new Error('Not yet implemented!');
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
  utxo() {
    throw new Error('Not yet implemented!');
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
