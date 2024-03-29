const axiaTypes = (function (exports, util, utilCrypto) {
  'use strict';

  const global = window;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys$v(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$v(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$v(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$v(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const numberTypes = {
    Fixed64: 'Int<64, Fixed64>',
    FixedI64: 'Int<64, FixedI64>',
    FixedU64: 'UInt<64, FixedU64>',
    Fixed128: 'Int<128, Fixed128>',
    FixedI128: 'Int<128, FixedI128>',
    FixedU128: 'UInt<128, FixedU128>',
    I32F32: 'Int<64, I32F32>',
    U32F32: 'UInt<64, U32F32>',
    PerU16: 'UInt<16, PerU16>',
    Perbill: 'UInt<32, Perbill>',
    Percent: 'UInt<8, Percent>',
    Permill: 'UInt<32, Permill>',
    Perquintill: 'UInt<64, Perquintill>'
  };
  const definitions$V = {
    rpc: {},
    types: _objectSpread$v(_objectSpread$v({}, numberTypes), {}, {
      AccountId: 'AccountId32',
      AccountId20: 'GenericEthereumAccountId',
      AccountId32: 'GenericAccountId',
      AccountIdOf: 'AccountId',
      AccountIndex: 'GenericAccountIndex',
      Address: 'MultiAddress',
      AssetId: 'u32',
      Balance: 'UInt<128, Balance>',
      BalanceOf: 'Balance',
      Block: 'GenericBlock',
      BlockNumber: 'u32',
      BlockNumberFor: 'BlockNumber',
      BlockNumberOf: 'BlockNumber',
      Call: 'GenericCall',
      CallHash: 'Hash',
      CallHashOf: 'CallHash',
      ChangesTrieConfiguration: {
        digestInterval: 'u32',
        digestLevels: 'u32'
      },
      ChangesTrieSignal: {
        _enum: {
          NewConfiguration: 'Option<ChangesTrieConfiguration>'
        }
      },
      ConsensusEngineId: 'GenericConsensusEngineId',
      CodecHash: 'Hash',
      Digest: {
        logs: 'Vec<DigestItem>'
      },
      DigestItem: {
        _enum: {
          Other: 'Bytes',
          // 0
          AuthoritiesChange: 'Vec<AuthorityId>',
          // 1
          ChangesTrieRoot: 'Hash',
          // 2
          SealV0: 'SealV0',
          // 3
          Consensus: 'Consensus',
          // 4
          Seal: 'Seal',
          // 5
          PreRuntime: 'PreRuntime',
          // 6
          ChangesTrieSignal: 'ChangesTrieSignal',
          // 7
          RuntimeEnvironmentUpdated: 'Null' // 8

        }
      },
      ExtrinsicsWeight: {
        normal: 'Weight',
        operational: 'Weight'
      },
      H32: '[u8; 4; H32]',
      H64: '[u8; 8; H64]',
      H128: '[u8; 16; H128]',
      H160: '[u8; 20; H160]',
      H256: '[u8; 32; H256]',
      H512: '[u8; 64; H512]',
      H1024: '[u8; 128; H1024]',
      H2048: '[u8; 256; H2048]',
      Hash: 'H256',
      Header: {
        parentHash: 'Hash',
        number: 'Compact<BlockNumber>',
        stateRoot: 'Hash',
        extrinsicsRoot: 'Hash',
        digest: 'Digest'
      },
      HeaderPartial: {
        parentHash: 'Hash',
        // since we only parse JSON with this, having non-compact works
        number: 'BlockNumber'
      },
      IndicesLookupSource: 'GenericLookupSource',
      Index: 'u32',
      Justification: '(ConsensusEngineId, EncodedJustification)',
      EncodedJustification: 'Bytes',
      Justifications: 'Vec<Justification>',
      KeyValue: '(StorageKey, StorageData)',
      KeyTypeId: 'u32',
      LockIdentifier: '[u8; 8]',
      LookupSource: 'MultiAddress',
      LookupTarget: 'AccountId',
      ModuleId: 'LockIdentifier',
      MultiAddress: 'GenericMultiAddress',
      MultiSigner: {
        _enum: {
          Ed25519: '[u8; 32]',
          Sr25519: '[u8; 32]',
          Ecdsa: '[u8; 33]'
        }
      },
      Moment: 'UInt<64, Moment>',
      OpaqueCall: 'Bytes',
      Origin: 'DoNotConstruct<Origin>',
      OriginCaller: {
        _enum: {
          // this should be dynamically built from the actual modules, based on index
          System: 'SystemOrigin'
        }
      },
      PalletId: 'LockIdentifier',
      PalletsOrigin: 'OriginCaller',
      PalletVersion: {
        major: 'u16',
        minor: 'u8',
        patch: 'u8'
      },
      Pays: {
        _enum: ['Yes', 'No']
      },
      Phantom: 'Null',
      PhantomData: 'Null',
      Releases: {
        _enum: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10']
      },
      RuntimeDbWeight: {
        read: 'Weight',
        write: 'Weight'
      },
      SignedBlock: 'SignedBlockWithJustifications',
      SignedBlockWithJustification: {
        block: 'Block',
        justification: 'Option<EncodedJustification>'
      },
      SignedBlockWithJustifications: {
        block: 'Block',
        justifications: 'Option<Justifications>'
      },
      Slot: 'u64',
      StorageData: 'Bytes',
      StorageProof: {
        trieNodes: 'Vec<Bytes>'
      },
      TransactionPriority: 'u64',
      TransactionInfo: {
        _alias: {
          dataSize: 'size'
        },
        chunkRoot: 'H256',
        contentHash: 'H256',
        dataSize: 'u32',
        blockChunks: 'u32'
      },
      TransactionStorageProof: {
        chunk: 'Vec<u8>',
        proof: 'Vec<Vec<u8>>'
      },
      ValidatorId: 'AccountId',
      ValidatorIdOf: 'ValidatorId',
      Weight: 'u64',
      WeightMultiplier: 'Fixed64',
      // digest
      PreRuntime: '(ConsensusEngineId, Bytes)',
      SealV0: '(u64, Signature)',
      Seal: '(ConsensusEngineId, Bytes)',
      Consensus: '(ConsensusEngineId, Bytes)'
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$U = {
    rpc: {},
    types: {
      AssetApprovalKey: {
        owner: 'AccountId',
        delegate: 'AccountId'
      },
      AssetApproval: {
        amount: 'TAssetBalance',
        deposit: 'TAssetDepositBalance'
      },
      AssetBalance: {
        balance: 'TAssetBalance',
        isFrozen: 'bool',
        isSufficient: 'bool'
      },
      AssetDestroyWitness: {
        accounts: 'Compact<u32>',
        sufficients: 'Compact<u32>',
        approvals: 'Compact<u32>'
      },
      AssetDetails: {
        owner: 'AccountId',
        issuer: 'AccountId',
        admin: 'AccountId',
        freezer: 'AccountId',
        supply: 'TAssetBalance',
        deposit: 'TAssetDepositBalance',
        minBalance: 'TAssetBalance',
        isSufficient: 'bool',
        accounts: 'u32',
        sufficients: 'u32',
        approvals: 'u32',
        isFrozen: 'bool'
      },
      AssetMetadata: {
        deposit: 'TAssetDepositBalance',
        name: 'Vec<u8>',
        symbol: 'Vec<u8>',
        decimals: 'u8',
        isFrozen: 'bool'
      },
      TAssetBalance: 'u64',
      TAssetDepositBalance: 'BalanceOf'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$T = {
    rpc: {},
    types: {
      UncleEntryItem: {
        _enum: {
          InclusionHeight: 'BlockNumber',
          Uncle: '(Hash, Option<AccountId>)'
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$S = {
    rpc: {},
    types: {
      RawAuraPreDigest: {
        slotNumber: 'u64'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$R = {
    rpc: {
      epochAuthorship: {
        description: 'Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore',
        params: [],
        type: 'HashMap<AuthorityId, EpochAuthorship>'
      }
    },
    types: {
      AllowedSlots: {
        _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
      },
      BabeAuthorityWeight: 'u64',
      BabeEpochConfiguration: {
        c: '(u64, u64)',
        allowedSlots: 'AllowedSlots'
      },
      BabeBlockWeight: 'u32',
      BabeEquivocationProof: {
        offender: 'AuthorityId',
        slotNumber: 'SlotNumber',
        firstHeader: 'Header',
        secondHeader: 'Header'
      },
      BabeWeight: 'u64',
      MaybeRandomness: 'Option<Randomness>',
      MaybeVrf: 'Option<VrfData>',
      EpochAuthorship: {
        primary: 'Vec<u64>',
        secondary: 'Vec<u64>',
        secondary_vrf: 'Vec<u64>'
      },
      NextConfigDescriptor: {
        _enum: {
          V0: 'Null',
          V1: 'NextConfigDescriptorV1'
        }
      },
      NextConfigDescriptorV1: {
        c: '(u64, u64)',
        allowedSlots: 'AllowedSlots'
      },
      Randomness: 'Hash',
      RawBabePreDigest: {
        _enum: {
          Phantom: 'Null',
          // index starts at 1... empty slot at 0
          Primary: 'RawBabePreDigestPrimary',
          SecondaryPlain: 'RawBabePreDigestSecondaryPlain',
          SecondaryVRF: 'RawBabePreDigestSecondaryVRF'
        }
      },
      RawBabePreDigestPrimary: {
        authorityIndex: 'u32',
        // AuthorityIndex (also in aura)
        slotNumber: 'SlotNumber',
        vrfOutput: 'VrfOutput',
        vrfProof: 'VrfProof'
      },
      RawBabePreDigestSecondaryPlain: {
        authorityIndex: 'u32',
        // AuthorityIndex (also in aura)
        slotNumber: 'SlotNumber'
      },
      RawBabePreDigestSecondaryVRF: {
        authorityIndex: 'u32',
        slotNumber: 'SlotNumber',
        vrfOutput: 'VrfOutput',
        vrfProof: 'VrfProof'
      },
      RawBabePreDigestTo159: {
        _enum: {
          Primary: 'RawBabePreDigestPrimaryTo159',
          Secondary: 'RawBabePreDigestSecondaryTo159'
        }
      },
      RawBabePreDigestPrimaryTo159: {
        authorityIndex: 'u32',
        slotNumber: 'SlotNumber',
        weight: 'BabeBlockWeight',
        vrfOutput: 'VrfOutput',
        vrfProof: 'VrfProof'
      },
      RawBabePreDigestSecondaryTo159: {
        authorityIndex: 'u32',
        slotNumber: 'SlotNumber',
        weight: 'BabeBlockWeight'
      },
      // a cross old/new compatible version of the digest, that is _only_ useful
      // for partial parsing and extraction of the author. This assumes that all
      // entries has the authorityIndex in the first position - and that it is all
      // we are interested in
      RawBabePreDigestCompat: {
        _enum: {
          Zero: 'u32',
          One: 'u32',
          Two: 'u32',
          Three: 'u32'
        }
      },
      SlotNumber: 'u64',
      VrfData: '[u8; 32]',
      VrfOutput: '[u8; 32]',
      VrfProof: '[u8; 64]'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$Q = {
    rpc: {},
    types: {
      AccountData: {
        free: 'Balance',
        reserved: 'Balance',
        miscFrozen: 'Balance',
        feeFrozen: 'Balance'
      },
      BalanceLockTo212: {
        id: 'LockIdentifier',
        amount: 'Balance',
        until: 'BlockNumber',
        reasons: 'WithdrawReasons'
      },
      BalanceLock: {
        id: 'LockIdentifier',
        amount: 'Balance',
        reasons: 'Reasons'
      },
      BalanceStatus: {
        _enum: ['Free', 'Reserved']
      },
      Reasons: {
        _enum: ['Fee', 'Misc', 'All']
      },
      ReserveData: {
        id: 'ReserveIdentifier',
        amount: 'Balance'
      },
      ReserveIdentifier: '[u8; 8]',
      VestingSchedule: {
        offset: 'Balance',
        perBlock: 'Balance',
        startingBlock: 'BlockNumber'
      },
      WithdrawReasons: {
        _set: {
          TransactionPayment: 0b00000001,
          Transfer: 0b00000010,
          Reserve: 0b00000100,
          Fee: 0b00001000,
          Tip: 0b00010000
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$P = {
    rpc: {
      subscribeJustifications: {
        description: 'Returns the block most recently finalized by BEEFY, alongside side its justification.',
        params: [],
        pubsub: ['justifications', 'subscribeJustifications', 'unsubscribeJustifications'],
        type: 'BeefySignedCommitment'
      }
    },
    types: {
      BeefyCommitment: {
        payload: 'BeefyPayload',
        blockNumber: 'BlockNumber',
        validatorSetId: 'ValidatorSetId'
      },
      BeefyId: '[u8; 33]',
      BeefySignedCommitment: {
        commitment: 'BeefyCommitment',
        signatures: 'Vec<Option<Signature>>'
      },
      BeefyNextAuthoritySet: {
        id: 'u64',
        len: 'u32',
        root: 'H256'
      },
      BeefyPayload: 'MmrRootHash',
      MmrRootHash: 'H256',
      ValidatorSetId: 'u64'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$O = {
    rpc: {},
    types: {
      CollectiveOrigin: {
        _enum: {
          Members: '(MemberCount, MemberCount)',
          Member: 'AccountId'
        }
      },
      MemberCount: 'u32',
      ProposalIndex: 'u32',
      VotesTo230: {
        index: 'ProposalIndex',
        threshold: 'MemberCount',
        ayes: 'Vec<AccountId>',
        nays: 'Vec<AccountId>'
      },
      Votes: {
        index: 'ProposalIndex',
        threshold: 'MemberCount',
        ayes: 'Vec<AccountId>',
        nays: 'Vec<AccountId>',
        end: 'BlockNumber'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$N = {
    rpc: {},
    types: {
      AuthorityId: 'AccountId',
      RawVRFOutput: '[u8; 32]'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$M = {
    rpc: {
      call: {
        description: 'Executes a call to a contract',
        params: [{
          name: 'callRequest',
          type: 'ContractCallRequest'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'ContractExecResult'
      },
      instantiate: {
        description: 'Instantiate a new contract',
        params: [{
          name: 'request',
          type: 'InstantiateRequest'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHstoric: true,
          isOptional: true
        }],
        type: 'ContractInstantiateResult'
      },
      getStorage: {
        description: 'Returns the value under a specified storage key in a contract',
        params: [{
          name: 'address',
          type: 'AccountId'
        }, {
          name: 'key',
          type: 'H256'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Option<Bytes>'
      },
      rentProjection: {
        description: 'Returns the projected time a given contract will be able to sustain paying its rent',
        params: [{
          name: 'address',
          type: 'AccountId'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Option<BlockNumber>'
      }
    },
    types: {
      AliveContractInfo: {
        trieId: 'TrieId',
        storageSize: 'u32',
        pairCount: 'u32',
        codeHash: 'CodeHash',
        rentAllowance: 'Balance',
        rentPaid: 'Balance',
        deductBlock: 'BlockNumber',
        lastWrite: 'Option<BlockNumber>',
        _reserved: 'Option<Null>'
      },
      CodeHash: 'Hash',
      ContractCallRequest: {
        origin: 'AccountId',
        dest: 'AccountId',
        value: 'Balance',
        gasLimit: 'u64',
        inputData: 'Bytes'
      },
      ContractExecResultSuccessTo255: {
        status: 'u8',
        data: 'Raw'
      },
      ContractExecResultTo255: {
        _enum: {
          Success: 'ContractExecResultSuccessTo255',
          Error: 'Null'
        }
      },
      ContractExecResultSuccessTo260: {
        flags: 'u32',
        data: 'Bytes',
        gasConsumed: 'u64'
      },
      ContractExecResultTo260: {
        _enum: {
          Success: 'ContractExecResultSuccessTo260',
          Error: 'Null'
        }
      },
      ContractExecResultErrModule: {
        index: 'u8',
        error: 'u8',
        message: 'Option<Text>'
      },
      ContractExecResultErr: {
        _enum: {
          Other: 'Text',
          CannotLookup: 'Null',
          BadOrigin: 'Null',
          Module: 'ContractExecResultErrModule'
        }
      },
      ContractExecResultOk: {
        flags: 'u32',
        data: 'Bytes'
      },
      ContractExecResultResult: {
        _enum: {
          Ok: 'ContractExecResultOk',
          Err: 'ContractExecResultErr'
        }
      },
      ContractExecResultTo267: {
        gasConsumed: 'u64',
        debugMessage: 'Text',
        result: 'ContractExecResultResult'
      },
      ContractExecResult: {
        gasConsumed: 'u64',
        gasRequired: 'u64',
        debugMessage: 'Text',
        result: 'ContractExecResultResult'
      },
      ContractInfo: {
        _enum: {
          Alive: 'AliveContractInfo',
          Tombstone: 'TombstoneContractInfo'
        }
      },
      ContractStorageKey: '[u8; 32]',
      DeletedContract: {
        pairCount: 'u32',
        trieId: 'TrieId'
      },
      ExecReturnValue: {
        flags: 'u32',
        data: 'Bytes'
      },
      Gas: 'u64',
      HostFnWeightsTo264: {
        caller: 'Weight',
        address: 'Weight',
        gasLeft: 'Weight',
        balance: 'Weight',
        valueTransferred: 'Weight',
        minimumBalance: 'Weight',
        tombstoneDeposit: 'Weight',
        rentAllowance: 'Weight',
        blockNumber: 'Weight',
        now: 'Weight',
        weightToFee: 'Weight',
        gas: 'Weight',
        input: 'Weight',
        inputPerByte: 'Weight',
        return: 'Weight',
        returnPerByte: 'Weight',
        terminate: 'Weight',
        restoreTo: 'Weight',
        restoreToPerDelta: 'Weight',
        random: 'Weight',
        depositEvent: 'Weight',
        depositEventPerTopic: 'Weight',
        depositEventPerByte: 'Weight',
        setRentAllowance: 'Weight',
        setStorage: 'Weight',
        setStoragePerByte: 'Weight',
        clearStorage: 'Weight',
        getStorage: 'Weight',
        getStoragePerByte: 'Weight',
        transfer: 'Weight',
        call: 'Weight',
        callTransferSurcharge: 'Weight',
        callPerInputByte: 'Weight',
        callPerOutputByte: 'Weight',
        instantiate: 'Weight',
        instantiatePerInputByte: 'Weight',
        instantiatePerOutputByte: 'Weight',
        hashSha2256: 'Weight',
        hashSha2256PerByte: 'Weight',
        hashKeccak256: 'Weight',
        hashKeccak256PerByte: 'Weight',
        hashBlake2256: 'Weight',
        hashBlake2256PerByte: 'Weight',
        hashBlake2128: 'Weight',
        hashBlake2128PerByte: 'Weight'
      },
      HostFnWeights: {
        caller: 'Weight',
        address: 'Weight',
        gasLeft: 'Weight',
        balance: 'Weight',
        valueTransferred: 'Weight',
        minimumBalance: 'Weight',
        tombstoneDeposit: 'Weight',
        rentAllowance: 'Weight',
        blockNumber: 'Weight',
        now: 'Weight',
        weightToFee: 'Weight',
        gas: 'Weight',
        input: 'Weight',
        inputPerByte: 'Weight',
        return: 'Weight',
        returnPerByte: 'Weight',
        terminate: 'Weight',
        terminatePerCodeByte: 'Weight',
        restoreTo: 'Weight',
        restoreToPerCallerCodeByte: 'Weight',
        restoreToPerTombstoneCodeByte: 'Weight',
        restoreToPerDelta: 'Weight',
        random: 'Weight',
        depositEvent: 'Weight',
        depositEventPerTopic: 'Weight',
        depositEventPerByte: 'Weight',
        setRentAllowance: 'Weight',
        setStorage: 'Weight',
        setStoragePerByte: 'Weight',
        clearStorage: 'Weight',
        getStorage: 'Weight',
        getStoragePerByte: 'Weight',
        transfer: 'Weight',
        call: 'Weight',
        callPerCodeByte: 'Weight',
        callTransferSurcharge: 'Weight',
        callPerInputByte: 'Weight',
        callPerOutputByte: 'Weight',
        instantiate: 'Weight',
        instantiatePerCodeByte: 'Weight',
        instantiatePerInputByte: 'Weight',
        instantiatePerOutputByte: 'Weight',
        instantiatePerSaltByte: 'Weight',
        hashSha2256: 'Weight',
        hashSha2256PerByte: 'Weight',
        hashKeccak256: 'Weight',
        hashKeccak256PerByte: 'Weight',
        hashBlake2256: 'Weight',
        hashBlake2256PerByte: 'Weight',
        hashBlake2128: 'Weight',
        hashBlake2128PerByte: 'Weight',
        rentParams: 'Weight'
      },
      InstantiateRequest: {
        origin: 'AccountId',
        endowment: 'Balance',
        gasLimit: 'Gas',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes'
      },
      ContractInstantiateResult: {
        _enum: {
          Ok: 'InstantiateReturnValue',
          Err: 'Null'
        }
      },
      InstantiateReturnValue: {
        result: 'ExecReturnValue',
        accountId: 'AccountId',
        rentProjection: 'Option<RentProjection>'
      },
      InstructionWeights: {
        i64const: 'u32',
        i64load: 'u32',
        i64store: 'u32',
        select: 'u32',
        rIf: 'u32',
        br: 'u32',
        brIf: 'u32',
        brIable: 'u32',
        brIablePerEntry: 'u32',
        call: 'u32',
        callIndirect: 'u32',
        callIndirectPerParam: 'u32',
        localGet: 'u32',
        localSet: 'u32',
        local_tee: 'u32',
        globalGet: 'u32',
        globalSet: 'u32',
        memoryCurrent: 'u32',
        memoryGrow: 'u32',
        i64clz: 'u32',
        i64ctz: 'u32',
        i64popcnt: 'u32',
        i64eqz: 'u32',
        i64extendsi32: 'u32',
        i64extendui32: 'u32',
        i32wrapi64: 'u32',
        i64eq: 'u32',
        i64ne: 'u32',
        i64lts: 'u32',
        i64ltu: 'u32',
        i64gts: 'u32',
        i64gtu: 'u32',
        i64les: 'u32',
        i64leu: 'u32',
        i64ges: 'u32',
        i64geu: 'u32',
        i64add: 'u32',
        i64sub: 'u32',
        i64mul: 'u32',
        i64divs: 'u32',
        i64divu: 'u32',
        i64rems: 'u32',
        i64remu: 'u32',
        i64and: 'u32',
        i64or: 'u32',
        i64xor: 'u32',
        i64shl: 'u32',
        i64shrs: 'u32',
        i64shru: 'u32',
        i64rotl: 'u32',
        i64rotr: 'u32'
      },
      LimitsTo264: {
        eventTopics: 'u32',
        stackHeight: 'u32',
        globals: 'u32',
        parameters: 'u32',
        memoryPages: 'u32',
        tableSize: 'u32',
        brTableSize: 'u32',
        subjectLen: 'u32',
        codeSize: 'u32'
      },
      Limits: {
        eventTopics: 'u32',
        stackHeight: 'u32',
        globals: 'u32',
        parameters: 'u32',
        memoryPages: 'u32',
        tableSize: 'u32',
        brTableSize: 'u32',
        subjectLen: 'u32'
      },
      PrefabWasmModule: {
        scheduleVersion: 'Compact<u32>',
        initial: 'Compact<u32>',
        maximum: 'Compact<u32>',
        refcount: 'Compact<u64>',
        _reserved: 'Option<Null>',
        code: 'Bytes',
        originalCodeLen: 'u32'
      },
      RentProjection: {
        _enum: {
          EvictionAt: 'BlockNumber',
          NoEviction: 'Null'
        }
      },
      ScheduleTo212: {
        version: 'u32',
        putCodePerByteCost: 'Gas',
        growMemCost: 'Gas',
        regularOpCost: 'Gas',
        returnDataPerByteCost: 'Gas',
        eventDataPerByteCost: 'Gas',
        eventPerTopicCost: 'Gas',
        eventBaseCost: 'Gas',
        sandboxDataReadCost: 'Gas',
        sandboxDataWriteCost: 'Gas',
        maxEventTopics: 'u32',
        maxStackHeight: 'u32',
        maxMemoryPages: 'u32',
        enablePrintln: 'bool',
        maxSubjectLen: 'u32'
      },
      ScheduleTo258: {
        version: 'u32',
        putCodePerByteCost: 'Gas',
        growMemCost: 'Gas',
        regularOpCost: 'Gas',
        returnDataPerByteCost: 'Gas',
        eventDataPerByteCost: 'Gas',
        eventPerTopicCost: 'Gas',
        eventBaseCost: 'Gas',
        sandboxDataReadCost: 'Gas',
        sandboxDataWriteCost: 'Gas',
        transferCost: 'Gas',
        maxEventTopics: 'u32',
        maxStackHeight: 'u32',
        maxMemoryPages: 'u32',
        enablePrintln: 'bool',
        maxSubjectLen: 'u32'
      },
      ScheduleTo264: {
        version: 'u32',
        enablePrintln: 'bool',
        limits: 'LimitsTo264',
        instructionWeights: 'InstructionWeights',
        hostFnWeights: 'HostFnWeightsTo264'
      },
      Schedule: {
        version: 'u32',
        enablePrintln: 'bool',
        limits: 'Limits',
        instructionWeights: 'InstructionWeights',
        hostFnWeights: 'HostFnWeights'
      },
      SeedOf: 'Hash',
      TombstoneContractInfo: 'Hash',
      TrieId: 'Bytes'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const AllConvictions = [// 0.1x votes, unlocked.
  'None', // 1x votes, locked for an enactment period following a successful vote.
  'Locked1x', // 2x votes, locked for 2x enactment periods following a successful vote.
  'Locked2x', // 3x votes, locked for 4x...
  'Locked3x', // 4x votes, locked for 8x...
  'Locked4x', // 5x votes, locked for 16x...
  'Locked5x', /// 6x votes, locked for 32x...
  'Locked6x'];
  const definitions$L = {
    rpc: {},
    types: {
      AccountVote: {
        _enum: {
          Standard: 'AccountVoteStandard',
          Split: 'AccountVoteSplit'
        }
      },
      AccountVoteSplit: {
        aye: 'Balance',
        nay: 'Balance'
      },
      AccountVoteStandard: {
        vote: 'Vote',
        balance: 'Balance'
      },
      Conviction: {
        _enum: AllConvictions
      },
      Delegations: {
        votes: 'Balance',
        capital: 'Balance'
      },
      PreimageStatus: {
        _enum: {
          Missing: 'BlockNumber',
          Available: 'PreimageStatusAvailable'
        }
      },
      PreimageStatusAvailable: {
        data: 'Bytes',
        provider: 'AccountId',
        deposit: 'Balance',
        since: 'BlockNumber',
        expiry: 'Option<BlockNumber>'
      },
      PriorLock: '(BlockNumber, Balance)',
      PropIndex: 'u32',
      Proposal: 'Call',
      ProxyState: {
        _enum: {
          Open: 'AccountId',
          Active: 'AccountId'
        }
      },
      ReferendumIndex: 'u32',
      ReferendumInfoTo239: {
        end: 'BlockNumber',
        proposalHash: 'Hash',
        threshold: 'VoteThreshold',
        delay: 'BlockNumber'
      },
      ReferendumInfo: {
        _enum: {
          Ongoing: 'ReferendumStatus',
          Finished: 'ReferendumInfoFinished'
        }
      },
      ReferendumInfoFinished: {
        approved: 'bool',
        end: 'BlockNumber'
      },
      ReferendumStatus: {
        end: 'BlockNumber',
        proposalHash: 'Hash',
        threshold: 'VoteThreshold',
        delay: 'BlockNumber',
        tally: 'Tally'
      },
      Tally: {
        ayes: 'Balance',
        nays: 'Balance',
        turnout: 'Balance'
      },
      Voting: {
        _enum: {
          Direct: 'VotingDirect',
          Delegating: 'VotingDelegating'
        }
      },
      VotingDirect: {
        votes: 'Vec<VotingDirectVote>',
        delegations: 'Delegations',
        prior: 'PriorLock'
      },
      VotingDirectVote: '(ReferendumIndex, AccountVote)',
      VotingDelegating: {
        balance: 'Balance',
        target: 'AccountId',
        conviction: 'Conviction',
        delegations: 'Delegations',
        prior: 'PriorLock'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$K = {
    rpc: {},
    types: {
      ApprovalFlag: 'u32',
      DefunctVoter: {
        who: 'AccountId',
        voteCount: 'Compact<u32>',
        candidateCount: 'Compact<u32>'
      },
      Renouncing: {
        _enum: {
          Member: 'Null',
          RunnerUp: 'Null',
          Candidate: 'Compact<u32>'
        }
      },
      SetIndex: 'u32',
      Vote: 'GenericVote',
      VoteIndex: 'u32',
      VoterInfo: {
        lastActive: 'VoteIndex',
        lastWin: 'VoteIndex',
        pot: 'Balance',
        stake: 'Balance'
      },
      VoteThreshold: {
        _enum: ['Super majority approval', 'Super majority rejection', 'Simple majority']
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$J = {
    rpc: {
      createBlock: {
        description: 'Instructs the manual-seal authorship task to create a new block',
        params: [{
          name: 'createEmpty',
          type: 'bool'
        }, {
          name: 'finalize',
          type: 'bool'
        }, {
          name: 'parentHash',
          type: 'BlockHash',
          isOptional: true
        }],
        type: 'CreatedBlock'
      },
      finalizeBlock: {
        description: 'Instructs the manual-seal authorship task to finalize a block',
        params: [{
          name: 'hash',
          type: 'BlockHash'
        }, {
          name: 'justification',
          type: 'Justification',
          isOptional: true
        }],
        type: 'bool'
      }
    },
    types: {
      CreatedBlock: {
        hash: 'BlockHash',
        aux: 'ImportedAux'
      },
      ImportedAux: {
        headerOnly: 'bool',
        clearJustificationRequests: 'bool',
        needsJustification: 'bool',
        badJustification: 'bool',
        needsFinalityProof: 'bool',
        isNewBest: 'bool'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$I = {
    rpc: {},
    types: {
      EvmAccount: {
        nonce: 'u256',
        balance: 'u256'
      },
      EvmLog: {
        address: 'H160',
        topics: 'Vec<H256>',
        data: 'Bytes'
      },
      EvmVicinity: {
        gasPrice: 'u256',
        origin: 'H160'
      },
      ExitError: {
        _enum: {
          StackUnderflow: 'Null',
          StackOverflow: 'Null',
          InvalidJump: 'Null',
          InvalidRange: 'Null',
          DesignatedInvalid: 'Null',
          CallTooDeep: 'Null',
          CreateCollision: 'Null',
          CreateContractLimit: 'Null',
          OutOfOffset: 'Null',
          OutOfGas: 'Null',
          OutOfFund: 'Null',
          PCUnderflow: 'Null',
          CreateEmpty: 'Null',
          Other: 'Text'
        }
      },
      ExitFatal: {
        _enum: {
          NotSupported: 'Null',
          UnhandledInterrupt: 'Null',
          CallErrorAsFatal: 'ExitError',
          Other: 'Text'
        }
      },
      ExitReason: {
        _enum: {
          Succeed: 'ExitSucceed',
          Error: 'ExitError',
          Revert: 'ExitRevert',
          Fatal: 'ExitFatal'
        }
      },
      ExitRevert: {
        _enum: ['Reverted']
      },
      ExitSucceed: {
        _enum: ['Stopped', 'Returned', 'Suicided']
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$H = {
    rpc: {},
    types: {
      Extrinsic: 'GenericExtrinsic',
      ExtrinsicEra: 'GenericExtrinsicEra',
      ExtrinsicPayload: 'GenericExtrinsicPayload',
      ExtrinsicSignature: 'MultiSignature',
      ExtrinsicV4: 'GenericExtrinsicV4',
      ExtrinsicPayloadV4: 'GenericExtrinsicPayloadV4',
      ExtrinsicSignatureV4: 'GenericExtrinsicSignatureV4',
      ExtrinsicUnknown: 'GenericExtrinsicUnknown',
      ExtrinsicPayloadUnknown: 'GenericExtrinsicPayloadUnknown',
      // eras
      Era: 'ExtrinsicEra',
      ImmortalEra: 'GenericImmortalEra',
      MortalEra: 'GenericMortalEra',
      // signatures & signer
      AnySignature: 'H512',
      MultiSignature: {
        _enum: {
          Ed25519: 'Ed25519Signature',
          Sr25519: 'Sr25519Signature',
          Ecdsa: 'EcdsaSignature'
        }
      },
      Signature: 'H512',
      SignerPayload: 'GenericSignerPayload',
      EcdsaSignature: '[u8; 65]',
      Ed25519Signature: 'H512',
      Sr25519Signature: 'H512'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$G = {
    rpc: {},
    types: {
      AssetOptions: {
        initalIssuance: 'Compact<Balance>',
        permissions: 'PermissionLatest'
      },
      Owner: {
        _enum: {
          None: 'Null',
          Address: 'AccountId'
        }
      },
      PermissionsV1: {
        update: 'Owner',
        mint: 'Owner',
        burn: 'Owner'
      },
      PermissionVersions: {
        _enum: {
          V1: 'PermissionsV1'
        }
      },
      PermissionLatest: 'PermissionsV1'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$F = {
    rpc: {},
    types: {
      ActiveGilt: {
        proportion: 'Perquintill',
        amount: 'Balance',
        who: 'AccountId',
        expiry: 'BlockNumber'
      },
      ActiveGiltsTotal: {
        frozen: 'Balance',
        proportion: 'Perquintill',
        index: 'ActiveIndex',
        target: 'Perquintill'
      },
      ActiveIndex: 'u32',
      GiltBid: {
        amount: 'Balance',
        who: 'AccountId'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$E = {
    rpc: {
      proveFinality: {
        description: 'Prove finality for the range (begin; end] hash.',
        params: [{
          name: 'begin',
          type: 'BlockHash'
        }, {
          name: 'end',
          type: 'BlockHash'
        }, {
          name: 'authoritiesSetId',
          type: 'u64',
          isOptional: true
        }],
        type: 'Option<EncodedFinalityProofs>'
      },
      roundState: {
        description: 'Returns the state of the current best round state as well as the ongoing background rounds',
        params: [],
        type: 'ReportedRoundStates'
      },
      subscribeJustifications: {
        description: 'Subscribes to grandpa justifications',
        params: [],
        pubsub: ['justifications', 'subscribeJustifications', 'unsubscribeJustifications'],
        type: 'JustificationNotification'
      }
    },
    types: {
      AuthorityIndex: 'u64',
      AuthorityList: 'Vec<NextAuthority>',
      AuthoritySet: {
        currentAuthorities: 'AuthorityList',
        setId: 'u64',
        pendingStandardChanges: 'ForkTreePendingChange',
        pendingForcedChanges: 'Vec<PendingChange>',
        authoritySetChanges: 'AuthoritySetChanges'
      },
      ForkTreePendingChange: {
        roots: 'Vec<ForkTreePendingChangeNode>',
        bestFinalizedNumber: 'Option<BlockNumber>'
      },
      ForkTreePendingChangeNode: {
        hash: 'BlockHash',
        number: 'BlockNumber',
        data: 'PendingChange',
        // actual data, here PendingChange
        children: 'Vec<ForkTreePendingChangeNode>'
      },
      AuthoritySetChange: '(U64, BlockNumber)',
      AuthoritySetChanges: 'Vec<AuthoritySetChange>',
      AuthorityWeight: 'u64',
      DelayKind: {
        _enum: {
          Finalized: 'Null',
          Best: 'DelayKindBest'
        }
      },
      DelayKindBest: {
        medianLastFinalized: 'BlockNumber'
      },
      EncodedFinalityProofs: 'Bytes',
      GrandpaEquivocation: {
        _enum: {
          Prevote: 'GrandpaEquivocationValue',
          Precommit: 'GrandpaEquivocationValue'
        }
      },
      GrandpaEquivocationProof: {
        setId: 'SetId',
        equivocation: 'GrandpaEquivocation'
      },
      GrandpaEquivocationValue: {
        roundNumber: 'u64',
        identity: 'AuthorityId',
        first: '(GrandpaPrevote, AuthoritySignature)',
        second: '(GrandpaPrevote, AuthoritySignature)'
      },
      GrandpaPrevote: {
        targetHash: 'Hash',
        targetNumber: 'BlockNumber'
      },
      GrandpaCommit: {
        targetHash: 'BlockHash',
        targetNumber: 'BlockNumber',
        precommits: 'Vec<GrandpaSignedPrecommit>'
      },
      GrandpaPrecommit: {
        targetHash: 'BlockHash',
        targetNumber: 'BlockNumber'
      },
      GrandpaSignedPrecommit: {
        precommit: 'GrandpaPrecommit',
        signature: 'AuthoritySignature',
        id: 'AuthorityId'
      },
      GrandpaJustification: {
        round: 'u64',
        commit: 'GrandpaCommit',
        votesAncestries: 'Vec<Header>'
      },
      JustificationNotification: 'Bytes',
      KeyOwnerProof: 'MembershipProof',
      NextAuthority: '(AuthorityId, AuthorityWeight)',
      PendingChange: {
        nextAuthorities: 'AuthorityList',
        delay: 'BlockNumber',
        canonHeight: 'BlockNumber',
        canonHash: 'BlockHash',
        delayKind: 'DelayKind'
      },
      PendingPause: {
        scheduledAt: 'BlockNumber',
        delay: 'BlockNumber'
      },
      PendingResume: {
        scheduledAt: 'BlockNumber',
        delay: 'BlockNumber'
      },
      Precommits: {
        currentWeight: 'u32',
        missing: 'BTreeSet<AuthorityId>'
      },
      Prevotes: {
        currentWeight: 'u32',
        missing: 'BTreeSet<AuthorityId>'
      },
      ReportedRoundStates: {
        setId: 'u32',
        best: 'RoundState',
        background: 'Vec<RoundState>'
      },
      RoundState: {
        round: 'u32',
        totalWeight: 'u32',
        thresholdWeight: 'u32',
        prevotes: 'Prevotes',
        precommits: 'Precommits'
      },
      SetId: 'u64',
      StoredPendingChange: {
        scheduledAt: 'BlockNumber',
        delay: 'BlockNumber',
        nextAuthorities: 'AuthorityList'
      },
      StoredState: {
        _enum: {
          Live: 'Null',
          PendingPause: 'PendingPause',
          Paused: 'Null',
          PendingResume: 'PendingResume'
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$D = {
    rpc: {},
    types: {
      IdentityFields: {
        _set: {
          _bitLength: 64,
          // Mapped here to 32 bits, in Rust these are 64-bit values
          Display: 0b00000000000000000000000000000001,
          Legal: 0b00000000000000000000000000000010,
          Web: 0b00000000000000000000000000000100,
          Riot: 0b00000000000000000000000000001000,
          Email: 0b00000000000000000000000000010000,
          PgpFingerprint: 0b00000000000000000000000000100000,
          Image: 0b00000000000000000000000001000000,
          Twitter: 0b00000000000000000000000010000000
        }
      },
      IdentityInfoAdditional: '(Data, Data)',
      IdentityInfoTo198: {
        additional: 'Vec<IdentityInfoAdditional>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<H160>',
        image: 'Data'
      },
      IdentityInfo: {
        _fallback: 'IdentityInfoTo198',
        additional: 'Vec<IdentityInfoAdditional>',
        display: 'Data',
        legal: 'Data',
        web: 'Data',
        riot: 'Data',
        email: 'Data',
        pgpFingerprint: 'Option<H160>',
        image: 'Data',
        twitter: 'Data'
      },
      IdentityJudgement: {
        _enum: {
          Unknown: 'Null',
          FeePaid: 'Balance',
          Reasonable: 'Null',
          KnownGood: 'Null',
          OutOfDate: 'Null',
          LowQuality: 'Null',
          Erroneous: 'Null'
        }
      },
      RegistrationJudgement: '(RegistrarIndex, IdentityJudgement)',
      RegistrationTo198: {
        judgements: 'Vec<RegistrationJudgement>',
        deposit: 'Balance',
        info: 'IdentityInfoTo198'
      },
      Registration: {
        _fallback: 'RegistrationTo198',
        judgements: 'Vec<RegistrationJudgement>',
        deposit: 'Balance',
        info: 'IdentityInfo'
      },
      RegistrarIndex: 'u32',
      RegistrarInfo: {
        account: 'AccountId',
        fee: 'Balance',
        fields: 'IdentityFields'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$C = {
    rpc: {},
    types: {
      AuthIndex: 'u32',
      AuthoritySignature: 'Signature',
      Heartbeat: {
        blockNumber: 'BlockNumber',
        networkState: 'OpaqueNetworkState',
        sessionIndex: 'SessionIndex',
        authorityIndex: 'AuthIndex',
        validatorsLen: 'u32'
      },
      HeartbeatTo244: {
        blockNumber: 'BlockNumber',
        networkState: 'OpaqueNetworkState',
        sessionIndex: 'SessionIndex',
        authorityIndex: 'AuthIndex'
      },
      OpaqueMultiaddr: 'Bytes',
      OpaquePeerId: 'Bytes',
      OpaqueNetworkState: {
        peerId: 'OpaquePeerId',
        externalAddresses: 'Vec<OpaqueMultiaddr>'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$B = {
    rpc: {},
    types: {
      CallIndex: '(u8, u8)',
      LotteryConfig: {
        price: 'Balance',
        start: 'BlockNumber',
        length: 'BlockNumber',
        delay: 'BlockNumber',
        repeat: 'bool'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$A = {
    rpc: {
      generateProof: {
        description: 'Generate MMR proof for given leaf index.',
        params: [{
          name: 'leafIndex',
          type: 'u64'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'MmrLeafProof'
      }
    },
    types: {
      MmrLeafProof: {
        blockHash: 'BlockHash',
        leaf: 'Bytes',
        proof: 'Bytes'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$z = {
    rpc: {},
    types: {
      DeferredOffenceOf: '(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)',
      Kind: '[u8; 16]',
      OffenceDetails: {
        offender: 'Offender',
        reporters: 'Vec<Reporter>'
      },
      Offender: 'IdentificationTuple',
      OpaqueTimeSlot: 'Bytes',
      ReportIdOf: 'Hash',
      Reporter: 'AccountId'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$y = {
    rpc: {},
    types: {
      ProxyDefinition: {
        delegate: 'AccountId',
        proxyType: 'ProxyType',
        delay: 'BlockNumber'
      },
      ProxyType: {
        _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
      },
      ProxyAnnouncement: {
        real: 'AccountId',
        callHash: 'Hash',
        height: 'BlockNumber'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$x = {
    rpc: {},
    types: {
      ActiveRecovery: {
        created: 'BlockNumber',
        deposit: 'Balance',
        friends: 'Vec<AccountId>'
      },
      RecoveryConfig: {
        delayPeriod: 'BlockNumber',
        deposit: 'Balance',
        friends: 'Vec<AccountId>',
        threshold: 'u16'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$w = {
    rpc: {},
    types: {
      Period: '(BlockNumber, u32)',
      Priority: 'u8',
      SchedulePeriod: 'Period',
      SchedulePriority: 'Priority',
      Scheduled: {
        maybeId: 'Option<Bytes>',
        priority: 'SchedulePriority',
        call: 'Call',
        maybePeriodic: 'Option<SchedulePeriod>',
        origin: 'PalletsOrigin'
      },
      ScheduledTo254: {
        maybeId: 'Option<Bytes>',
        priority: 'SchedulePriority',
        call: 'Call',
        maybePeriodic: 'Option<SchedulePeriod>'
      },
      TaskAddress: '(BlockNumber, u32)'
    }
  };

  function ownKeys$u(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$u(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$u(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$u(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  // The runtime definition of SessionKeys are passed as a Trait to session
  // Defined in `node/runtime/src/lib.rs` as follow
  //   impl_opaque_keys! {
  //     pub struct SessionKeys {
  // Here we revert to tuples to keep the interfaces "opaque", as per the use
  const keyTypes = {
    // key for beefy
    BeefyKey: '[u8; 33]',
    // default to Substrate master defaults, 4 keys (axia master, 5 keys)
    Keys: 'SessionKeys4',
    SessionKeys1: '(AccountId)',
    SessionKeys2: '(AccountId, AccountId)',
    SessionKeys3: '(AccountId, AccountId, AccountId)',
    SessionKeys4: '(AccountId, AccountId, AccountId, AccountId)',
    SessionKeys5: '(AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys6: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys6B: '(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
    SessionKeys7: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys7B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
    SessionKeys8: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys8B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
    SessionKeys9: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys9B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)',
    SessionKeys10: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)',
    SessionKeys10B: '(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)'
  };
  const definitions$v = {
    rpc: {},
    types: _objectSpread$u(_objectSpread$u({}, keyTypes), {}, {
      FullIdentification: 'Exposure',
      IdentificationTuple: '(ValidatorId, FullIdentification)',
      MembershipProof: {
        session: 'SessionIndex',
        trieNodes: 'Vec<Vec<u8>>',
        validatorCount: 'ValidatorCount'
      },
      SessionIndex: 'u32',
      ValidatorCount: 'u32'
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$u = {
    rpc: {},
    types: {
      Bid: {
        who: 'AccountId',
        kind: 'BidKind',
        value: 'Balance'
      },
      BidKind: {
        _enum: {
          Deposit: 'Balance',
          Vouch: '(AccountId, Balance)'
        }
      },
      // a society-specific Judgement (not the same as identity Judgement)
      SocietyJudgement: {
        _enum: ['Rebid', 'Reject', 'Approve']
      },
      // a society-specific Vote
      SocietyVote: {
        _enum: ['Skeptic', 'Reject', 'Approve']
      },
      StrikeCount: 'u32',
      VouchingStatus: {
        _enum: ['Vouching', 'Banned']
      }
    }
  };

  function ownKeys$t(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$t(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$t(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$t(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const deprecated = {
    Points: 'u32',
    EraPoints: {
      total: 'Points',
      individual: 'Vec<Points>'
    }
  };
  const phragmen = {
    CompactAssignments: 'CompactAssignmentsWith16',
    CompactAssignmentsWith16: {
      votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
      votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
      votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
      votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
      votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
      votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
      votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
      votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
      votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
      votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
      votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
      votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
      votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
      votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
      votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
      votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>'
    },
    CompactAssignmentsWith24: {
      votes1: 'Vec<(NominatorIndexCompact, ValidatorIndexCompact)>',
      votes2: 'Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>',
      votes3: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>',
      votes4: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>',
      votes5: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>',
      votes6: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>',
      votes7: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>',
      votes8: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>',
      votes9: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>',
      votes10: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>',
      votes11: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>',
      votes12: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>',
      votes13: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>',
      votes14: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>',
      votes15: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>',
      votes16: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>',
      votes17: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>',
      votes18: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>',
      votes19: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>',
      votes20: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>',
      votes21: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>',
      votes22: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>',
      votes23: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>',
      votes24: 'Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>'
    },
    CompactAssignmentsTo265: 'CompactAssignmentsWith16',
    CompactAssignmentsTo257: {
      votes1: 'Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>',
      votes2: 'Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>',
      votes3: 'Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>',
      votes4: 'Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>',
      votes5: 'Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>',
      votes6: 'Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>',
      votes7: 'Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>',
      votes8: 'Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>',
      votes9: 'Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>',
      votes10: 'Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>',
      votes11: 'Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>',
      votes12: 'Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>',
      votes13: 'Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>',
      votes14: 'Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>',
      votes15: 'Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>',
      votes16: 'Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>'
    },
    CompactScore: '(ValidatorIndex, OffchainAccuracy)',
    CompactScoreCompact: '(ValidatorIndexCompact, OffchainAccuracyCompact)',
    ElectionCompute: {
      // in previous versions the last entry was "AuthorityId"
      // (since no data attached, and it is via SCALE can rename)
      _enum: ['OnChain', 'Signed', 'Unsigned']
    },
    ElectionPhase: {
      _enum: {
        Off: null,
        Signed: null,
        Unsigned: '(bool, BlockNumber)',
        Emergency: null
      }
    },
    ElectionResult: {
      compute: 'ElectionCompute',
      slotStake: 'Balance',
      electedStashes: 'Vec<AccountId>',
      exposures: 'Vec<(AccountId, Exposure)>'
    },
    ElectionScore: '[u128; 3]',
    ElectionSize: {
      validators: 'Compact<ValidatorIndex>',
      nominators: 'Compact<NominatorIndex>'
    },
    ElectionStatus: {
      _enum: {
        Close: 'Null',
        Open: 'BlockNumber'
      }
    },
    ExtendedBalance: 'u128',
    RawSolution: 'RawSolutionWith16',
    RawSolutionWith16: {
      compact: 'CompactAssignmentsWith16',
      score: 'ElectionScore',
      round: 'u32'
    },
    RawSolutionWith24: {
      compact: 'CompactAssignmentsWith24',
      score: 'ElectionScore',
      round: 'u32'
    },
    RawSolutionTo265: 'RawSolutionWith16',
    ReadySolution: {
      supports: 'SolutionSupports',
      score: 'ElectionScore',
      compute: 'ElectionCompute'
    },
    RoundSnapshot: {
      voters: 'Vec<(AccountId, VoteWeight, Vec<AccountId>)>',
      targets: 'Vec<AccountId>'
    },
    SeatHolder: {
      who: 'AccountId',
      stake: 'Balance',
      deposit: 'Balance'
    },
    SignedSubmission: {
      _fallback: 'SignedSubmissionTo276',
      who: 'AccountId',
      deposit: 'Balance',
      solution: 'RawSolution',
      reward: 'Balance'
    },
    SignedSubmissionTo276: {
      who: 'AccountId',
      deposit: 'Balance',
      solution: 'RawSolution'
    },
    SignedSubmissionOf: 'SignedSubmission',
    SolutionOrSnapshotSize: {
      voters: 'Compact<u32>',
      targets: 'Compact<u32>'
    },
    SolutionSupport: {
      total: 'ExtendedBalance',
      voters: 'Vec<(AccountId, ExtendedBalance)>'
    },
    SolutionSupports: 'Vec<(AccountId, SolutionSupport)>',
    Supports: 'SolutionSupports',
    SubmissionIndicesOf: 'BTreeMap<ElectionScore, u32>',
    Voter: {
      votes: 'Vec<AccountId>',
      stake: 'Balance',
      deposit: 'Balance'
    },
    VoteWeight: 'u64'
  };
  const definitions$t = {
    rpc: {},
    types: _objectSpread$t(_objectSpread$t(_objectSpread$t({}, deprecated), phragmen), {}, {
      ActiveEraInfo: {
        index: 'EraIndex',
        start: 'Option<Moment>'
      },
      EraIndex: 'u32',
      EraRewardPoints: {
        total: 'RewardPoint',
        individual: 'BTreeMap<AccountId, RewardPoint>'
      },
      EraRewards: {
        total: 'u32',
        rewards: 'Vec<u32>'
      },
      Exposure: {
        total: 'Compact<Balance>',
        own: 'Compact<Balance>',
        others: 'Vec<IndividualExposure>'
      },
      Forcing: {
        _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
      },
      IndividualExposure: {
        who: 'AccountId',
        value: 'Compact<Balance>'
      },
      KeyType: 'AccountId',
      MomentOf: 'Moment',
      Nominations: {
        targets: 'Vec<AccountId>',
        submittedIn: 'EraIndex',
        suppressed: 'bool'
      },
      NominatorIndex: 'u32',
      NominatorIndexCompact: 'Compact<NominatorIndex>',
      OffchainAccuracy: 'PerU16',
      OffchainAccuracyCompact: 'Compact<OffchainAccuracy>',
      PhragmenScore: '[u128; 3]',
      Points: 'u32',
      RewardDestination: {
        _enum: {
          Staked: 'Null',
          Stash: 'Null',
          Controller: 'Null',
          Account: 'AccountId',
          None: 'Null'
        }
      },
      RewardPoint: 'u32',
      SlashJournalEntry: {
        who: 'AccountId',
        amount: 'Balance',
        ownSlash: 'Balance'
      },
      SlashingSpansTo204: {
        spanIndex: 'SpanIndex',
        lastStart: 'EraIndex',
        prior: 'Vec<EraIndex>'
      },
      SlashingSpans: {
        spanIndex: 'SpanIndex',
        lastStart: 'EraIndex',
        lastNonzeroSlash: 'EraIndex',
        prior: 'Vec<EraIndex>'
      },
      SpanIndex: 'u32',
      SpanRecord: {
        slashed: 'Balance',
        paidOut: 'Balance'
      },
      StakingLedgerTo223: {
        stash: 'AccountId',
        total: 'Compact<Balance>',
        active: 'Compact<Balance>',
        unlocking: 'Vec<UnlockChunk>'
      },
      StakingLedgerTo240: {
        stash: 'AccountId',
        total: 'Compact<Balance>',
        active: 'Compact<Balance>',
        unlocking: 'Vec<UnlockChunk>',
        lastReward: 'Option<EraIndex>'
      },
      StakingLedger: {
        stash: 'AccountId',
        total: 'Compact<Balance>',
        active: 'Compact<Balance>',
        unlocking: 'Vec<UnlockChunk>',
        claimedRewards: 'Vec<EraIndex>'
      },
      UnappliedSlashOther: '(AccountId, Balance)',
      UnappliedSlash: {
        validator: 'AccountId',
        own: 'Balance',
        others: 'Vec<UnappliedSlashOther>',
        reporters: 'Vec<AccountId>',
        payout: 'Balance'
      },
      UnlockChunk: {
        value: 'Compact<Balance>',
        era: 'Compact<BlockNumber>'
      },
      ValidatorIndex: 'u16',
      ValidatorIndexCompact: 'Compact<ValidatorIndex>',
      ValidatorPrefs: 'ValidatorPrefsWithBlocked',
      ValidatorPrefsWithCommission: {
        commission: 'Compact<Perbill>'
      },
      ValidatorPrefsWithBlocked: {
        commission: 'Compact<Perbill>',
        blocked: 'bool'
      },
      ValidatorPrefsTo196: {
        validatorPayment: 'Compact<Balance>'
      },
      ValidatorPrefsTo145: {
        unstakeThreshold: 'Compact<u32>',
        validatorPayment: 'Compact<Balance>'
      }
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$s = {
    rpc: {},
    types: {
      WeightToFeeCoefficient: {
        coeffInteger: 'Balance',
        coeffFrac: 'Perbill',
        negative: 'bool',
        degree: 'u8'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$r = {
    rpc: {
      genSyncSpec: {
        endpoint: 'sync_state_genSyncSpec',
        description: 'Returns the json-serialized chainspec running the node, with a sync state.',
        params: [{
          name: 'raw',
          type: 'bool'
        }],
        type: 'Json'
      }
    },
    types: {}
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$q = {
    rpc: {
      accountNextIndex: {
        alias: ['account_nextIndex'],
        description: 'Retrieves the next accountIndex as available on the node',
        params: [{
          name: 'accountId',
          type: 'AccountId'
        }],
        type: 'Index'
      },
      dryRun: {
        alias: ['system_dryRunAt'],
        description: 'Dry run an extrinsic at a given block',
        params: [{
          name: 'extrinsic',
          type: 'Bytes'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'ApplyExtrinsicResult'
      },
      name: {
        description: 'Retrieves the node name',
        params: [],
        type: 'Text'
      },
      version: {
        description: 'Retrieves the version of the node',
        params: [],
        type: 'Text'
      },
      chain: {
        description: 'Retrieves the chain',
        params: [],
        type: 'Text'
      },
      chainType: {
        description: 'Retrieves the chain type',
        params: [],
        type: 'ChainType'
      },
      properties: {
        description: 'Get a custom set of properties as a JSON object, defined in the chain spec',
        params: [],
        type: 'ChainProperties'
      },
      health: {
        description: 'Return health status of the node',
        params: [],
        type: 'Health'
      },
      localPeerId: {
        description: 'Returns the base58-encoded PeerId of the node',
        params: [],
        type: 'Text'
      },
      localListenAddresses: {
        description: 'The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example',
        params: [],
        type: 'Vec<Text>'
      },
      peers: {
        description: 'Returns the currently connected peers',
        params: [],
        type: 'Vec<PeerInfo>'
      },
      networkState: {
        alias: ['system_unstable_networkState'],
        description: 'Returns current state of the network',
        params: [],
        type: 'NetworkState'
      },
      addReservedPeer: {
        description: 'Adds a reserved peer',
        params: [{
          name: 'peer',
          type: 'Text'
        }],
        type: 'Text'
      },
      removeReservedPeer: {
        description: 'Remove a reserved peer',
        params: [{
          name: 'peerId',
          type: 'Text'
        }],
        type: 'Text'
      },
      reservedPeers: {
        description: 'Returns the list of reserved peers',
        params: [],
        type: 'Vec<Text>'
      },
      nodeRoles: {
        description: 'Returns the roles the node is running as',
        params: [],
        type: 'Vec<NodeRole>'
      },
      syncState: {
        description: 'Returns the state of the syncing of the node',
        params: [],
        type: 'SyncState'
      },
      addLogFilter: {
        description: 'Adds the supplied directives to the current log filter',
        params: [{
          name: 'directives',
          type: 'Text'
        }],
        type: 'Null'
      },
      resetLogFilter: {
        description: 'Resets the log filter to Substrate defaults',
        params: [],
        type: 'Null'
      }
    },
    types: {
      AccountInfo: 'AccountInfoWithTripleRefCount',
      AccountInfoWithRefCountU8: {
        nonce: 'Index',
        refcount: 'u8',
        data: 'AccountData'
      },
      AccountInfoWithRefCount: {
        _fallback: 'AccountInfoWithRefCountU8',
        nonce: 'Index',
        refcount: 'RefCount',
        data: 'AccountData'
      },
      AccountInfoWithDualRefCount: {
        _fallback: 'AccountInfoWithRefCount',
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        data: 'AccountData'
      },
      // original naming
      AccountInfoWithProviders: 'AccountInfoWithDualRefCount',
      AccountInfoWithTripleRefCount: {
        _fallback: 'AccountInfoWithDualRefCount',
        nonce: 'Index',
        consumers: 'RefCount',
        providers: 'RefCount',
        sufficients: 'RefCount',
        data: 'AccountData'
      },
      ApplyExtrinsicResult: 'Result<DispatchOutcome, TransactionValidityError>',
      ArithmeticError: {
        _enum: ['Underflow', 'Overflow', 'DivisionByZero']
      },
      BlockLength: {
        max: 'PerDispatchClassU32'
      },
      BlockWeights: {
        baseBlock: 'Weight',
        maxBlock: 'Weight',
        perClass: 'PerDispatchClassWeightsPerClass'
      },
      ChainProperties: 'GenericChainProperties',
      ChainType: {
        _enum: {
          Development: 'Null',
          Local: 'Null',
          Live: 'Null',
          Custom: 'Text'
        }
      },
      ConsumedWeight: 'PerDispatchClassWeight',
      DigestOf: 'Digest',
      DispatchClass: {
        _enum: ['Normal', 'Operational', 'Mandatory']
      },
      DispatchError: {
        _enum: {
          Other: 'Null',
          CannotLookup: 'Null',
          BadOrigin: 'Null',
          Module: 'DispatchErrorModule',
          ConsumerRemaining: 'Null',
          NoProviders: 'Null',
          Token: 'TokenError',
          Arithmetic: 'ArithmeticError'
        }
      },
      DispatchErrorModule: {
        index: 'u8',
        error: 'u8'
      },
      DispatchErrorTo198: {
        module: 'Option<u8>',
        error: 'u8'
      },
      DispatchInfo: {
        weight: 'Weight',
        class: 'DispatchClass',
        paysFee: 'Pays'
      },
      DispatchInfoTo190: {
        weight: 'Weight',
        class: 'DispatchClass'
      },
      DispatchInfoTo244: {
        weight: 'Weight',
        class: 'DispatchClass',
        paysFee: 'bool'
      },
      DispatchOutcome: 'Result<(), DispatchError>',
      DispatchResult: 'Result<(), DispatchError>',
      DispatchResultOf: 'DispatchResult',
      DispatchResultTo198: 'Result<(), Text>',
      Event: 'GenericEvent',
      EventId: '[u8; 2]',
      EventIndex: 'u32',
      EventRecord: {
        phase: 'Phase',
        event: 'Event',
        topics: 'Vec<Hash>'
      },
      Health: {
        peers: 'u64',
        isSyncing: 'bool',
        shouldHavePeers: 'bool'
      },
      InvalidTransaction: {
        _enum: {
          Call: 'Null',
          Payment: 'Null',
          Future: 'Null',
          Stale: 'Null',
          BadProof: 'Null',
          AncientBirthBlock: 'Null',
          ExhaustsResources: 'Null',
          Custom: 'u8',
          BadMandatory: 'Null',
          MandatoryDispatch: 'Null'
        }
      },
      Key: 'Bytes',
      LastRuntimeUpgradeInfo: {
        specVersion: 'Compact<u32>',
        specName: 'Text'
      },
      NetworkState: {
        peerId: 'Text',
        listenedAddresses: 'Vec<Text>',
        externalAddresses: 'Vec<Text>',
        connectedPeers: 'HashMap<Text, Peer>',
        notConnectedPeers: 'HashMap<Text, NotConnectedPeer>',
        averageDownloadPerSec: 'u64',
        averageUploadPerSec: 'u64',
        peerset: 'NetworkStatePeerset'
      },
      NetworkStatePeerset: {
        messageQueue: 'u64',
        nodes: 'HashMap<Text, NetworkStatePeersetInfo>'
      },
      NetworkStatePeersetInfo: {
        connected: 'bool',
        reputation: 'i32'
      },
      NodeRole: {
        _enum: {
          Full: 'Null',
          LightClient: 'Null',
          Authority: 'Null',
          UnknownRole: 'u8'
        }
      },
      NotConnectedPeer: {
        knownAddresses: 'Vec<Text>',
        latestPingTime: 'Option<PeerPing>',
        versionString: 'Option<Text>'
      },
      Peer: {
        enabled: 'bool',
        endpoint: 'PeerEndpoint',
        knownAddresses: 'Vec<Text>',
        latestPingTime: 'PeerPing',
        open: 'bool',
        versionString: 'Text'
      },
      PeerEndpoint: {
        listening: 'PeerEndpointAddr'
      },
      PeerEndpointAddr: {
        _alias: {
          localAddr: 'local_addr',
          sendBackAddr: 'send_back_addr'
        },
        localAddr: 'Text',
        sendBackAddr: 'Text'
      },
      PeerPing: {
        nanos: 'u64',
        secs: 'u64'
      },
      PeerInfo: {
        peerId: 'Text',
        roles: 'Text',
        protocolVersion: 'u32',
        bestHash: 'Hash',
        bestNumber: 'BlockNumber'
      },
      PerDispatchClassU32: {
        normal: 'u32',
        operational: 'u32',
        mandatory: 'u32'
      },
      PerDispatchClassWeight: {
        normal: 'Weight',
        operational: 'Weight',
        mandatory: 'Weight'
      },
      PerDispatchClassWeightsPerClass: {
        normal: 'WeightPerClass',
        operational: 'WeightPerClass',
        mandatory: 'WeightPerClass'
      },
      Phase: {
        _enum: {
          ApplyExtrinsic: 'u32',
          Finalization: 'Null',
          Initialization: 'Null'
        }
      },
      RawOrigin: {
        _enum: {
          Root: 'Null',
          Signed: 'AccountId',
          None: 'Null'
        }
      },
      RefCount: 'u32',
      RefCountTo259: 'u8',
      SyncState: {
        startingBlock: 'BlockNumber',
        currentBlock: 'BlockNumber',
        highestBlock: 'Option<BlockNumber>'
      },
      SystemOrigin: 'RawOrigin',
      TokenError: {
        _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', // these are dropped, but still in older versions
        // (if this adjusts, will need to take a re-look)
        'Underflow', 'Overflow']
      },
      TransactionValidityError: {
        _enum: {
          Invalid: 'InvalidTransaction',
          Unknown: 'UnknownTransaction'
        }
      },
      UnknownTransaction: {
        _enum: {
          CannotLookup: 'Null',
          NoUnsignedValidator: 'Null',
          Custom: 'u8'
        }
      },
      WeightPerClass: {
        baseExtrinsic: 'Weight',
        maxExtrinsic: 'Weight',
        maxTotal: 'Option<Weight>',
        reserved: 'Option<Weight>'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$p = {
    rpc: {},
    types: {
      Bounty: {
        proposer: 'AccountId',
        value: 'Balance',
        fee: 'Balance',
        curatorDeposit: 'Balance',
        bond: 'Balance',
        status: 'BountyStatus'
      },
      BountyIndex: 'u32',
      BountyStatus: {
        _enum: {
          Proposed: 'Null',
          Approved: 'Null',
          Funded: 'Null',
          CuratorProposed: 'BountyStatusCuratorProposed',
          Active: 'BountyStatusActive',
          PendingPayout: 'BountyStatusPendingPayout'
        }
      },
      BountyStatusActive: {
        curator: 'AccountId',
        updateDue: 'BlockNumber'
      },
      BountyStatusCuratorProposed: {
        curator: 'AccountId'
      },
      BountyStatusPendingPayout: {
        curator: 'AccountId',
        beneficiary: 'AccountId',
        unlockAt: 'BlockNumber'
      },
      OpenTip: {
        reason: 'Hash',
        who: 'AccountId',
        finder: 'AccountId',
        deposit: 'Balance',
        closes: 'Option<BlockNumber>',
        tips: 'Vec<OpenTipTip>',
        findersFee: 'bool'
      },
      OpenTipTo225: {
        reason: 'Hash',
        who: 'AccountId',
        finder: 'Option<OpenTipFinderTo225>',
        closes: 'Option<BlockNumber>',
        tips: 'Vec<OpenTipTip>'
      },
      OpenTipFinderTo225: '(AccountId, Balance)',
      OpenTipTip: '(AccountId, Balance)',
      TreasuryProposal: {
        proposer: 'AccountId',
        value: 'Balance',
        beneficiary: 'AccountId',
        bond: 'Balance'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  const definitions$o = {
    rpc: {},
    types: {
      Multiplier: 'Fixed128'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$n = {
    rpc: {},
    types: {
      ClassId: 'u32',
      InstanceId: 'u32',
      DepositBalance: 'Balance',
      DepositBalanceOf: 'Balance',
      ClassDetails: {
        owner: 'AccountId',
        issuer: 'AccountId',
        admin: 'AccountId',
        freezer: 'AccountId',
        totalDeposit: 'DepositBalance',
        freeHolding: 'bool',
        instances: 'u32',
        instanceMetadatas: 'u32',
        attributes: 'u32',
        isFrozen: 'bool'
      },
      DestroyWitness: {
        instances: 'Compact<u32>',
        instanceMetadatas: 'Compact<u32>',
        attributes: 'Compact<u32>'
      },
      InstanceDetails: {
        owner: 'AccountId',
        approved: 'Option<AccountId>',
        isFrozen: 'bool',
        deposit: 'DepositBalance'
      },
      ClassMetadata: {
        deposit: 'DepositBalance',
        data: 'Vec<u8>',
        isFrozen: 'bool'
      },
      InstanceMetadata: {
        deposit: 'DepositBalance',
        data: 'Vec<u8>',
        isFrozen: 'bool'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$m = {
    rpc: {},
    types: {
      Multisig: {
        when: 'Timepoint',
        deposit: 'Balance',
        depositor: 'AccountId',
        approvals: 'Vec<AccountId>'
      },
      Timepoint: {
        height: 'BlockNumber',
        index: 'u32'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$l = {
    rpc: {},
    types: {
      VestingInfo: {
        locked: 'Balance',
        perBlock: 'Balance',
        startingBlock: 'BlockNumber'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$k = {
    rpc: {},
    types: {
      BlockAttestations: {
        receipt: 'CandidateReceipt',
        valid: 'Vec<AccountId>',
        invalid: 'Vec<AccountId>'
      },
      IncludedBlocks: {
        actualNumber: 'BlockNumber',
        session: 'SessionIndex',
        randomSeed: 'H256',
        activeParachains: 'Vec<ParaId>',
        paraBlocks: 'Vec<Hash>'
      },
      MoreAttestations: {}
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$j = {
    rpc: {},
    types: {
      BridgedBlockHash: 'H256',
      BridgedBlockNumber: 'BlockNumber',
      BridgedHeader: 'Header',
      CallOrigin: {
        _enum: {
          SourceRoot: 'Null',
          TargetAccount: '(AccountId, MultiSigner, MultiSignature)',
          SourceAccount: 'AccountId'
        }
      },
      ChainId: '[u8; 4]',
      DeliveredMessages: {
        begin: 'MessageNonce',
        end: 'MessageNonce',
        // pub type DispatchResultsBitVec = BitVec<Msb0, u8>;
        dispatchResults: 'BitVec'
      },
      DispatchFeePayment: {
        _enum: ['AtSourceChain', 'AtTargetChain']
      },
      InboundLaneData: {
        relayers: 'Vec<UnrewardedRelayer>',
        lastConfirmedNonce: 'MessageNonce'
      },
      InboundRelayer: 'AccountId',
      InitializationData: {
        header: 'Header',
        authorityList: 'AuthorityList',
        setId: 'SetId',
        isHalted: 'bool'
      },
      LaneId: '[u8; 4]',
      MessageData: {
        payload: 'Bytes',
        fee: 'Balance'
      },
      MessagesDeliveryProofOf: {
        bridgedHeaderHash: 'BlockHash',
        storageProof: 'Vec<Bytes>',
        lane: 'LaneId'
      },
      MessageKey: {
        laneId: 'LaneId',
        nonce: 'MessageNonce'
      },
      MessageNonce: 'u64',
      MessagesProofOf: {
        bridgedHeaderHash: 'BridgedBlockHash',
        storageProof: 'Vec<Bytes>',
        lane: 'LaneId',
        noncesStart: 'MessageNonce',
        noncesEnd: 'MessageNonce'
      },
      OperatingMode: {
        _enum: ['Normal', 'RejectingOutboundMessages', 'Halted']
      },
      OutboundLaneData: {
        latestGeneratedNonce: 'MessageNonce',
        latestReceivedNonce: 'MessageNonce',
        oldestUnprunedNonce: 'MessageNonce'
      },
      OutboundMessageFee: 'Balance',
      OutboundPayload: {
        specVersion: 'u32',
        weight: 'Weight',
        origin: 'CallOrigin',
        dispatchFeePayment: 'DispatchFeePayment',
        call: 'Bytes'
      },
      Parameter: 'Null',
      RelayerId: 'AccountId',
      UnrewardedRelayer: {
        relayer: 'RelayerId',
        messages: 'DeliveredMessages'
      },
      UnrewardedRelayersState: {
        unrewardedRelayer_Entries: 'MessageNonce',
        messagesInOldestEntry: 'MessageNonce',
        totalMessages: 'MessageNonce'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$i = {
    rpc: {},
    types: {
      EthereumAddress: 'H160',
      StatementKind: {
        _enum: ['Regular', 'Saft']
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$h = {
    rpc: {},
    types: {
      FundIndex: 'u32',
      LastContribution: {
        _enum: {
          Never: 'Null',
          PreEnding: 'u32',
          Ending: 'BlockNumber'
        }
      },
      FundInfo: {
        depositor: 'AccountId',
        verifier: 'Option<MultiSigner>',
        deposit: 'Balance',
        raised: 'Balance',
        end: 'BlockNumber',
        cap: 'Balance',
        lastContribution: 'LastContribution',
        firstPeriod: 'LeasePeriod',
        lastPeriod: 'LeasePeriod',
        trieIndex: 'TrieIndex'
      },
      TrieIndex: 'u32'
    }
  };

  function ownKeys$s(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$s(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$s(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$s(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const dmpQueue = {
    ConfigData: {
      maxIndividual: 'Weight'
    },
    MessageId: '[u8; 32]',
    OverweightIndex: 'u64',
    PageCounter: 'u32',
    PageIndexData: {
      beginUsed: 'PageCounter',
      endUsed: 'PageCounter',
      overweightCount: 'OverweightIndex'
    }
  };
  const definitions$g = {
    rpc: {},
    types: _objectSpread$s({}, dmpQueue)
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const hrmpTypes = {
    HrmpChannel: {
      maxCapacity: 'u32',
      maxTotalSize: 'u32',
      maxMessageSize: 'u32',
      msgCount: 'u32',
      totalSize: 'u32',
      mqcHead: 'Option<Hash>',
      senderDeposit: 'Balance',
      recipientDeposit: 'Balance'
    },
    HrmpChannelId: {
      sender: 'u32',
      receiver: 'u32'
    },
    HrmpOpenChannelRequest: {
      confirmed: 'bool',
      age: 'SessionIndex',
      senderDeposit: 'Balance',
      maxMessageSize: 'u32',
      maxCapacity: 'u32',
      maxTotalSize: 'u32'
    }
  };

  function ownKeys$r(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$r(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$r(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$r(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const SLOT_RANGE_COUNT = 10;
  const oldTypes = {
    Bidder: {
      _enum: {
        New: 'NewBidder',
        Existing: 'ParaId'
      }
    },
    IncomingParachain: {
      _enum: {
        Unset: 'NewBidder',
        Fixed: 'IncomingParachainFixed',
        Deploy: 'IncomingParachainDeploy'
      }
    },
    IncomingParachainDeploy: {
      code: 'ValidationCode',
      initialHeadData: 'HeadData'
    },
    IncomingParachainFixed: {
      codeHash: 'Hash',
      codeSize: 'u32',
      initialHeadData: 'HeadData'
    },
    NewBidder: {
      who: 'AccountId',
      sub: 'SubId'
    },
    SubId: 'u32'
  };
  const slotTypes = _objectSpread$r(_objectSpread$r({}, oldTypes), {}, {
    AuctionIndex: 'u32',
    LeasePeriod: 'BlockNumber',
    LeasePeriodOf: 'BlockNumber',
    SlotRange: {
      _enum: ['ZeroZero', 'ZeroOne', 'ZeroTwo', 'ZeroThree', 'OneOne', 'OneTwo', 'OneThree', 'TwoTwo', 'TwoThree', 'ThreeThree']
    },
    WinningData: `[WinningDataEntry; ${SLOT_RANGE_COUNT}]`,
    WinningDataEntry: 'Option<(AccountId, ParaId, BalanceOf)>',
    WinnersData: 'Vec<WinnersDataTuple>',
    WinnersDataTuple: '(AccountId, ParaId, BalanceOf, SlotRange)'
  });

  function ownKeys$q(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$q(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$q(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$q(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  const proposeTypes = {
    ParachainProposal: {
      proposer: 'AccountId',
      genesisHead: 'HeadData',
      validators: 'Vec<ValidatorId>',
      name: 'Bytes',
      balance: 'Balance'
    },
    RegisteredParachainInfo: {
      validators: 'Vec<ValidatorId>',
      proposer: 'AccountId'
    }
  };
  const cumulusTypes = {
    ServiceQuality: {
      _enum: ['Ordered', 'Fast']
    }
  };
  const disputeTypes = {
    DisputeLocation: {
      _enum: ['Local', 'Remote']
    },
    DisputeResult: {
      _enum: ['Valid', 'Invalid']
    },
    DisputeState: {
      validatorsFor: 'BitVec',
      validatorsAgainst: 'BitVec',
      start: 'BlockNumber',
      concludedAt: 'Option<BlockNumber>'
    },
    DisputeStatement: {
      _enum: {
        Valid: 'ValidDisputeStatementKind',
        Invalid: 'InvalidDisputeStatementKind'
      }
    },
    DisputeStatementSet: {
      candidateHash: 'CandidateHash',
      session: 'SessionIndex',
      statements: 'Vec<(DisputeStatement, ParaValidatorIndex, ValidatorSignature)>'
    },
    ExplicitDisputeStatement: {
      valid: 'bool',
      candidateHash: 'CandidateHash',
      session: 'SessionIndex'
    },
    InvalidDisputeStatementKind: {
      _enum: ['Explicit']
    },
    MultiDisputeStatementSet: 'Vec<DisputeStatementSet>',
    ValidDisputeStatementKind: {
      _enum: {
        Explicit: 'Null',
        BackingSeconded: 'Hash',
        BackingValid: 'Hash',
        ApprovalChecking: 'Null'
      }
    }
  };
  const definitions$f = {
    rpc: {},
    types: _objectSpread$q(_objectSpread$q(_objectSpread$q(_objectSpread$q(_objectSpread$q(_objectSpread$q({}, cumulusTypes), disputeTypes), hrmpTypes), proposeTypes), slotTypes), {}, {
      AbridgedCandidateReceipt: {
        parachainIndex: 'ParaId',
        relayParent: 'Hash',
        headData: 'HeadData',
        collator: 'CollatorId',
        signature: 'CollatorSignature',
        povBlockHash: 'Hash',
        commitments: 'CandidateCommitments'
      },
      AbridgedHostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeFrequency: 'BlockNumber',
        validationUpgradeDelay: 'BlockNumber'
      },
      AbridgedHrmpChannel: {
        maxCapacity: 'u32',
        maxTotalSize: 'u32',
        maxMessageSize: 'u32',
        msgCount: 'u32',
        totalSize: 'u32',
        mqcHead: 'Option<Hash>'
      },
      AssignmentId: 'AccountId',
      AssignmentKind: {
        _enum: {
          Parachain: 'Null',
          Parathread: '(CollatorId, u32)'
        }
      },
      AttestedCandidate: {
        candidate: 'AbridgedCandidateReceipt',
        validityVotes: 'Vec<ValidityAttestation>',
        validatorIndices: 'BitVec'
      },
      AuthorityDiscoveryId: 'AccountId',
      AvailabilityBitfield: 'BitVec',
      AvailabilityBitfieldRecord: {
        bitfield: 'AvailabilityBitfield',
        submittedTt: 'BlockNumber'
      },
      BackedCandidate: {
        candidate: 'CommittedCandidateReceipt',
        validityVotes: 'Vec<ValidityAttestation>',
        validatorIndices: 'BitVec'
      },
      BufferedSessionChange: {
        applyAt: 'BlockNumber',
        validators: 'Vec<ValidatorId>',
        queued: 'Vec<ValidatorId>',
        sessionIndex: 'SessionIndex'
      },
      CandidateCommitments: {
        upwardMessages: 'Vec<UpwardMessage>',
        horizontalMessages: 'Vec<OutboundHrmpMessage>',
        newValidationCode: 'Option<ValidationCode>',
        headData: 'HeadData',
        processedDownwardMessages: 'u32',
        hrmpWatermark: 'BlockNumber'
      },
      CandidateDescriptor: {
        paraId: 'ParaId',
        relayParent: 'RelayChainHash',
        collatorId: 'CollatorId',
        persistedValidationDataHash: 'Hash',
        povHash: 'Hash',
        erasureRoot: 'Hash',
        signature: 'CollatorSignature',
        paraHead: 'Hash',
        validationCodeHash: 'ValidationCodeHash'
      },
      CandidateHash: 'Hash',
      CandidateInfo: {
        who: 'AccountId',
        deposit: 'Balance'
      },
      CandidatePendingAvailability: {
        core: 'CoreIndex',
        hash: 'CandidateHash',
        descriptor: 'CandidateDescriptor',
        availabilityVotes: 'BitVec',
        backers: 'BitVec',
        relayParentNumber: 'BlockNumber',
        backedInNumber: 'BlockNumber',
        backingGroup: 'GroupIndex'
      },
      CandidateReceipt: {
        descriptor: 'CandidateDescriptor',
        commitmentsHash: 'Hash'
      },
      GlobalValidationData: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        blockNumber: 'BlockNumber'
      },
      CollatorId: 'H256',
      CollatorSignature: 'Signature',
      CommittedCandidateReceipt: {
        descriptor: 'CandidateDescriptor',
        commitments: 'CandidateCommitments'
      },
      CoreAssignment: {
        core: 'CoreIndex',
        paraId: 'ParaId',
        kind: 'AssignmentKind',
        groupIdx: 'GroupIndex'
      },
      CoreIndex: 'u32',
      CoreOccupied: {
        _enum: {
          Parathread: 'ParathreadEntry',
          Parachain: 'Null'
        }
      },
      DoubleVoteReport: {
        identity: 'ValidatorId',
        first: '(Statement, ValidatorSignature)',
        second: '(Statement, ValidatorSignature)',
        proof: 'MembershipProof',
        signingContext: 'SigningContext'
      },
      DownwardMessage: 'Bytes',
      GroupIndex: 'u32',
      GlobalValidationSchedule: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        blockNumber: 'BlockNumber'
      },
      HeadData: 'Bytes',
      HostConfiguration: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        maxUpwardQueueCount: 'u32',
        maxUpwardQueueSize: 'u32',
        maxUpwardMessageSize: 'u32',
        maxUpwardMessageNumPerCandidate: 'u32',
        hrmpMaxMessageNumPerCandidate: 'u32',
        validationUpgradeFrequency: 'BlockNumber',
        validationUpgradeDelay: 'BlockNumber',
        maxPovSize: 'u32',
        maxDownwardMessageSize: 'u32',
        preferredDispatchableUpwardMessagesStepWeight: 'Weight',
        hrmpMaxParachainOutboundChannels: 'u32',
        hrmpMaxParathreadOutboundChannels: 'u32',
        hrmpOpenRequestTtl: 'u32',
        hrmpSenderDeposit: 'Balance',
        hrmpRecipientDeposit: 'Balance',
        hrmpChannelMaxCapacity: 'u32',
        hrmpChannelMaxTotalSize: 'u32',
        hrmpMaxParachainInboundChannels: 'u32',
        hrmpMaxParathreadInboundChannels: 'u32',
        hrmpChannelMaxMessageSize: 'u32',
        codeRetentionPeriod: 'BlockNumber',
        parathreadCores: 'u32',
        parathreadRetries: 'u32',
        groupRotationFrequency: 'BlockNumber',
        chainAvailabilityPeriod: 'BlockNumber',
        threadAvailabilityPeriod: 'BlockNumber',
        schedulingLookahead: 'u32',
        maxValidatorsPerCore: 'Option<u32>',
        maxValidators: 'Option<u32>',
        disputePeriod: 'SessionIndex',
        disputePostConclusionAcceptancePeriod: 'BlockNumber',
        disputeMaxSpamSlots: 'u32',
        disputeConclusionByTimeOutPeriod: 'BlockNumber',
        noShowSlots: 'u32',
        nDelayTranches: 'u32',
        zerothDelayTrancheWidth: 'u32',
        neededApprovals: 'u32',
        relayVrfModuloSamples: 'u32'
      },
      InboundDownwardMessage: {
        pubSentAt: 'BlockNumber',
        pubMsg: 'DownwardMessage'
      },
      InboundHrmpMessage: {
        sentAt: 'BlockNumber',
        data: 'Bytes'
      },
      InboundHrmpMessages: 'Vec<InboundHrmpMessage>',
      LocalValidationData: {
        parentHead: 'HeadData',
        balance: 'Balance',
        codeUpgradeAllowed: 'Option<BlockNumber>'
      },
      MessageIngestionType: {
        downwardMessages: 'Vec<InboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<ParaId, InboundHrmpMessages>'
      },
      MessageQueueChain: 'RelayChainHash',
      OutboundHrmpMessage: {
        recipient: 'u32',
        data: 'Bytes'
      },
      ParachainDispatchOrigin: {
        _enum: ['Signed', 'Parachain', 'Root']
      },
      ParachainInherentData: {
        validationData: 'PersistedValidationData',
        relayChainState: 'StorageProof',
        downwardMessages: 'Vec<InboundDownwardMessage>',
        horizontalMessages: 'BTreeMap<ParaId, VecInboundHrmpMessage>'
      },
      ParachainsInherentData: {
        bitfields: 'SignedAvailabilityBitfields',
        backedCandidates: 'Vec<BackedCandidate>',
        disputes: 'MultiDisputeStatementSet',
        parentHeader: 'Header'
      },
      ParaGenesisArgs: {
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
        parachain: 'bool'
      },
      ParaId: 'u32',
      ParaInfo: {
        manager: 'AccountId',
        deposit: 'Balance',
        locked: 'bool'
      },
      ParaLifecycle: {
        _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingToParachain', 'DowngradingToParathread', 'OutgoingParathread', 'OutgoingParachain']
      },
      ParaPastCodeMeta: {
        upgradeTimes: 'Vec<ReplacementTimes>',
        lastPruned: 'Option<BlockNumber>'
      },
      ParaScheduling: {
        _enum: ['Always', 'Dynamic']
      },
      ParathreadClaim: '(ParaId, CollatorId)',
      ParathreadClaimQueue: {
        queue: 'Vec<QueuedParathread>',
        nextCoreOffset: 'u32'
      },
      ParathreadEntry: {
        claim: 'ParathreadClaim',
        retries: 'u32'
      },
      ParaValidatorIndex: 'u32',
      PersistedValidationData: {
        parentHead: 'HeadData',
        relayParentNumber: 'RelayChainBlockNumber',
        relayParentStorageRoot: 'Hash',
        maxPovSize: 'u32'
      },
      QueuedParathread: {
        claim: 'ParathreadEntry',
        coreOffset: 'u32'
      },
      RelayBlockNumber: 'u32',
      RelayChainBlockNumber: 'RelayBlockNumber',
      RelayHash: 'Hash',
      RelayChainHash: 'RelayHash',
      Remark: '[u8; 32]',
      ReplacementTimes: {
        expectedAt: 'BlockNumber',
        activatedAt: 'BlockNumber'
      },
      Retriable: {
        _enum: {
          Never: 'Null',
          WithRetries: 'u32'
        }
      },
      Scheduling: {
        _enum: ['Always', 'Dynamic']
      },
      SessionInfo: {
        validators: 'Vec<ValidatorId>',
        discoveryKeys: 'Vec<AuthorityDiscoveryId>',
        assignmentKeys: 'Vec<AssignmentId>',
        validatorGroups: 'Vec<SessionInfoValidatorGroup>',
        nCores: 'u32',
        zerothDelayTrancheWidth: 'u32',
        relayVrfModuloSamples: 'u32',
        nDelayTranches: 'u32',
        noShowSlots: 'u32',
        neededApprovals: 'u32'
      },
      SessionInfoValidatorGroup: 'Vec<ParaValidatorIndex>',
      SignedAvailabilityBitfield: {
        payload: 'BitVec',
        validatorIndex: 'ParaValidatorIndex',
        signature: 'ValidatorSignature'
      },
      SignedAvailabilityBitfields: 'Vec<SignedAvailabilityBitfield>',
      SigningContext: {
        sessionIndex: 'SessionIndex',
        parentHash: 'Hash'
      },
      Statement: {
        _enum: {
          Never: 'Null',
          // starts at 1
          Candidate: 'Hash',
          Valid: 'Hash',
          Invalid: 'Hash'
        }
      },
      TransientValidationData: {
        maxCodeSize: 'u32',
        maxHeadDataSize: 'u32',
        balance: 'Balance',
        codeUpgradeAllowed: 'Option<BlockNumber>',
        dmqLength: 'u32'
      },
      UpgradeGoAhead: {
        _enum: ['Abort', 'GoAhead']
      },
      UpgradeRestriction: {
        _enum: ['Present']
      },
      UpwardMessage: 'Bytes',
      ValidationFunctionParams: {
        maxCodeSize: 'u32',
        relayChainHeight: 'RelayChainBlockNumber',
        codeUpgradeAllowed: 'Option<RelayChainBlockNumber>'
      },
      ValidationCode: 'Bytes',
      ValidationCodeHash: 'Hash',
      ValidationData: {
        persisted: 'PersistedValidationData',
        transient: 'TransientValidationData'
      },
      ValidationDataType: {
        validationData: 'ValidationData',
        relayChainState: 'Vec<Bytes>'
      },
      ValidatorSignature: 'Signature',
      ValidityAttestation: {
        _enum: {
          Never: 'Null',
          // starts at 1
          Implicit: 'ValidatorSignature',
          Explicit: 'ValidatorSignature'
        }
      },
      MessagingStateSnapshot: {
        relayDispatchQueueSize: '(u32, u32)',
        egressChannels: 'Vec<MessagingStateSnapshotEgressEntry>'
      },
      MessagingStateSnapshotEgressEntry: '(ParaId, AbridgedHrmpChannel)',
      SystemInherentData: 'ParachainInherentData',
      VecInboundHrmpMessage: 'Vec<InboundHrmpMessage>'
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$e = {
    rpc: {},
    types: {
      Approvals: '[bool; 4]'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$d = {
    rpc: {},
    types: {
      AccountStatus: {
        validity: 'AccountValidity',
        freeBalance: 'Balance',
        lockedBalance: 'Balance',
        signature: 'Vec<u8>',
        vat: 'Permill'
      },
      AccountValidity: {
        _enum: ['Invalid', 'Initiated', 'Pending', 'ValidLow', 'ValidHigh', 'Completed']
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v0$1 = {
    AssetInstanceV0: {
      _enum: {
        Undefined: 'Null',
        Index8: 'u8',
        Index16: 'Compact<u16>',
        Index32: 'Compact<u32>',
        Index64: 'Compact<u64>',
        Index128: 'Compact<u128>',
        Array4: '[u8; 4]',
        Array8: '[u8; 8]',
        Array16: '[u8; 16]',
        Array32: '[u8; 32]',
        Blob: 'Vec<u8>'
      }
    },
    JunctionV0: {
      _enum: {
        Parent: 'Null',
        Parachain: 'Compact<u32>',
        AccountId32: {
          network: 'NetworkId',
          id: 'AccountId'
        },
        AccountIndex64: {
          network: 'NetworkId',
          index: 'Compact<u64>'
        },
        AccountKey20: {
          network: 'NetworkId',
          key: '[u8; 20]'
        },
        PalletInstance: 'u8',
        GeneralIndex: 'Compact<u128>',
        GeneralKey: 'Vec<u8>',
        OnlyChild: 'Null',
        Plurality: {
          id: 'BodyId',
          part: 'BodyPart'
        }
      }
    },
    MultiAssetV0: {
      _enum: {
        None: 'Null',
        All: 'Null',
        AllFungible: 'Null',
        AllNonFungible: 'Null',
        AllAbstractFungible: 'Vec<u8>',
        AllAbstractNonFungible: 'Vec<u8>',
        AllConcreteFungible: 'MultiLocationV0',
        AllConcreteNonFungible: 'MultiLocationV0',
        AbstractFungible: {
          id: 'Vec<u8>',
          instance: 'Compact<u128>'
        },
        AbstractNonFungible: {
          class: 'Vec<u8>',
          instance: 'AssetInstanceV0'
        },
        ConcreteFungible: {
          id: 'MultiLocationV0',
          amount: 'Compact<u128>'
        },
        ConcreteNonFungible: {
          class: 'MultiLocationV0',
          instance: 'AssetInstanceV0'
        }
      }
    },
    MultiLocationV0: {
      _enum: {
        Here: 'Null',
        X1: 'JunctionV0',
        X2: '(JunctionV0, JunctionV0)',
        X3: '(JunctionV0, JunctionV0, JunctionV0)',
        X4: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
        X5: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
        X6: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
        X7: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)',
        X8: '(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)'
      }
    },
    OriginKindV0: {
      _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
    },
    ResponseV0: {
      _enum: {
        Assets: 'Vec<MultiAssetV0>'
      }
    },
    XcmV0: {
      _enum: {
        WithdrawAsset: {
          assets: 'Vec<MultiAssetV0>',
          effects: 'Vec<XcmOrderV0>'
        },
        ReserveAssetDeposit: {
          assets: 'Vec<MultiAssetV0>',
          effects: 'Vec<XcmOrderV0>'
        },
        ReceiveTeleportedAsset: {
          assets: 'Vec<MultiAssetV0>',
          effects: 'Vec<XcmOrderV0>'
        },
        QueryResponse: {
          queryId: 'Compact<u64>',
          response: 'ResponseV0'
        },
        TransferAsset: {
          assets: 'Vec<MultiAssetV0>',
          dest: 'MultiLocationV0'
        },
        TransferReserveAsset: {
          assets: 'Vec<MultiAssetV0>',
          dest: 'MultiLocationV0',
          effects: 'Vec<XcmOrderV0>'
        },
        Transact: {
          originType: 'XcmOriginKind',
          requireWeightAtMost: 'u64',
          call: 'DoubleEncodedCall'
        },
        HrmpNewChannelOpenRequest: {
          sender: 'Compact<u32>',
          maxMessageSize: 'Compact<u32>',
          maxCapacity: 'Compact<u32>'
        },
        HrmpChannelAccepted: {
          recipient: 'Compact<u32>'
        },
        HrmpChannelClosing: {
          initiator: 'Compact<u32>',
          sender: 'Compact<u32>',
          recipient: 'Compact<u32>'
        },
        RelayedFrom: {
          who: 'MultiLocationV0',
          message: 'XcmV0'
        }
      }
    },
    XcmErrorV0: {
      _enum: {
        Undefined: 'Null',
        Overflow: 'Null',
        Unimplemented: 'Null',
        UnhandledXcmVersion: 'Null',
        UnhandledXcmMessage: 'Null',
        UnhandledEffect: 'Null',
        EscalationOfPrivilege: 'Null',
        UntrustedReserveLocation: 'Null',
        UntrustedTeleportLocation: 'Null',
        DestinationBufferOverflow: 'Null',
        SendFailed: 'Null',
        CannotReachDestination: '(MultiLocation, Xcm)',
        MultiLocationFull: 'Null',
        FailedToDecode: 'Null',
        BadOrigin: 'Null',
        ExceedsMaxMessageSize: 'Null',
        FailedToTransactAsset: 'Null',
        WeightLimitReached: 'Weight',
        Wildcard: 'Null',
        TooMuchWeightRequired: 'Null',
        NotHoldingFees: 'Null',
        WeightNotComputable: 'Null',
        Barrier: 'Null',
        NotWithdrawable: 'Null',
        LocationCannotHold: 'Null',
        TooExpensive: 'Null',
        AssetNotFound: 'Null',
        RecursionLimitReached: 'Null'
      }
    },
    XcmOrderV0: {
      _enum: {
        Null: 'Null',
        DepositAsset: {
          assets: 'Vec<MultiAssetV0>',
          dest: 'MultiLocationV0'
        },
        DepositReserveAsset: {
          assets: 'Vec<MultiAssetV0>',
          dest: 'MultiLocationV0',
          effects: 'Vec<XcmOrderV0>'
        },
        ExchangeAsset: {
          give: 'Vec<MultiAssetV0>',
          receive: 'Vec<MultiAssetV0>'
        },
        InitiateReserveWithdraw: {
          assets: 'Vec<MultiAssetV0>',
          reserve: 'MultiLocationV0',
          effects: 'Vec<XcmOrderV0>'
        },
        InitiateTeleport: {
          assets: 'Vec<MultiAsset>',
          dest: 'MultiLocationV0',
          effects: 'Vec<XcmOrderV0>'
        },
        QueryHolding: {
          queryId: 'Compact<u64>',
          dest: 'MultiLocationV0',
          assets: 'Vec<MultiAssetV0>'
        },
        BuyExecution: {
          fees: 'MultiAsset',
          weight: 'u64',
          debt: 'u64',
          haltOnError: 'bool',
          xcm: 'Vec<XcmV0>'
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v1 = {
    AssetInstanceV1: {
      _enum: {
        Undefined: 'Null',
        Index: 'Compact<u128>',
        Array4: '[u8; 4]',
        Array8: '[u8; 8]',
        Array16: '[u8; 16]',
        Array32: '[u8; 32]',
        Blob: 'Bytes'
      }
    },
    JunctionV1: {
      _enum: {
        Parachain: 'Compact<u32>',
        AccountId32: {
          network: 'NetworkId',
          id: 'AccountId'
        },
        AccountIndex64: {
          network: 'NetworkId',
          index: 'Compact<u64>'
        },
        AccountKey20: {
          network: 'NetworkId',
          key: '[u8; 20]'
        },
        PalletInstance: 'u8',
        GeneralIndex: 'Compact<u128>',
        GeneralKey: 'Vec<u8>',
        OnlyChild: 'Null',
        Plurality: {
          id: 'BodyId',
          part: 'BodyPart'
        }
      }
    },
    JunctionsV1: {
      _enum: {
        Here: 'Null',
        X1: 'JunctionV1',
        X2: '(JunctionV1, JunctionV1)',
        X3: '(JunctionV1, JunctionV1, JunctionV1)',
        X4: '(JunctionV1, JunctionV1, JunctionV1, JunctionV1)',
        X5: '(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)',
        X6: '(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)',
        X7: '(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)',
        X8: '(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)'
      }
    },
    MultiAssetsV1: 'Vec<MultiAssetV1>',
    MultiAssetV1: {
      id: 'XcmAssetId',
      fungibility: 'Fungibility'
    },
    MultiAssetFilterV1: {
      _enum: {
        Definite: 'MultiAssetsV1',
        Wild: 'WildMultiAssetV1'
      }
    },
    MultiLocationV1: {
      parents: 'u8',
      interior: 'JunctionsV1'
    },
    OriginKindV1: 'OriginKindV0',
    ResponseV1: {
      _enum: {
        Assets: 'MultiAssetsV1'
      }
    },
    WildMultiAssetV1: {
      _enum: {
        All: 'Null',
        AllOf: {
          id: 'XcmAssetId',
          fungibility: 'WildFungibility'
        }
      }
    },
    XcmV1: {
      _enum: {
        WithdrawAsset: {
          Vassets: 'MultiAssetsV1',
          effects: 'Vec<XcmOrderV1>'
        },
        ReserveAssetDeposit: {
          Vassets: 'MultiAssetsV1',
          effects: 'Vec<XcmOrderV1>'
        },
        ReceiveTeleportedAsset: {
          Vassets: 'MultiAssetsV1',
          effects: 'Vec<XcmOrderV1>'
        },
        QueryResponse: {
          queryId: 'Compact<u64>',
          response: 'ResponseV1'
        },
        TransferAsset: {
          Vassets: 'MultiAssetsV1',
          dest: 'MultiLocationV1'
        },
        TransferReserveAsset: {
          Vassets: 'MultiAssetsV1',
          dest: 'MultiLocationV1',
          effects: 'Vec<XcmOrderV1>'
        },
        Transact: {
          originType: 'XcmOriginKind',
          requireWeightAtMost: 'u64',
          call: 'DoubleEncodedCall'
        },
        HrmpNewChannelOpenRequest: {
          sender: 'Compact<u32>',
          maxMessageSize: 'Compact<u32>',
          maxCapacity: 'Compact<u32>'
        },
        HrmpChannelAccepted: {
          recipient: 'Compact<u32>'
        },
        HrmpChannelClosing: {
          initiator: 'Compact<u32>',
          sender: 'Compact<u32>',
          recipient: 'Compact<u32>'
        },
        RelayedFrom: {
          who: 'MultiLocationV1',
          message: 'XcmV1'
        }
      }
    },
    XcmErrorV1: {
      _enum: {
        Undefined: 'Null',
        Overflow: 'Null',
        Unimplemented: 'Null',
        UnhandledXcmVersion: 'Null',
        UnhandledXcmMessage: 'Null',
        UnhandledEffect: 'Null',
        EscalationOfPrivilege: 'Null',
        UntrustedReserveLocation: 'Null',
        UntrustedTeleportLocation: 'Null',
        DestinationBufferOverflow: 'Null',
        SendFailed: 'Null',
        CannotReachDestination: '(MultiLocationV1, XcmV1)',
        MultiLocationFull: 'Null',
        FailedToDecode: 'Null',
        BadOrigin: 'Null',
        ExceedsMaxMessageSize: 'Null',
        FailedToTransactAsset: 'Null',
        WeightLimitReached: 'Weight',
        Wildcard: 'Null',
        TooMuchWeightRequired: 'Null',
        NotHoldingFees: 'Null',
        WeightNotComputable: 'Null',
        Barrier: 'Null',
        NotWithdrawable: 'Null',
        LocationCannotHold: 'Null',
        TooExpensive: 'Null',
        AssetNotFound: 'Null',
        DestinationUnsupported: 'Null',
        RecursionLimitReached: 'Null'
      }
    },
    XcmOrderV1: {
      _enum: {
        Noop: 'Null',
        DepositAsset: {
          assets: 'MultiAssetFilterV1',
          maxAssets: 'u32',
          beneficiary: 'MultiLocationV1'
        },
        DepositReserveAsset: {
          assets: 'MultiAssetFilterV1',
          maxAssets: 'u32',
          dest: 'MultiLocationV1',
          effects: 'Vec<XcmOrderV1>'
        },
        ExchangeAsset: {
          give: 'MultiAssetFilterV1',
          receive: 'MultiAssetsV1'
        },
        InitiateReserveWithdraw: {
          assets: 'MultiAssetFilterV1',
          reserve: 'MultiLocationV1',
          effects: 'Vec<XcmOrderV1>'
        },
        InitiateTeleport: {
          assets: 'MultiAssetFilterV1',
          dest: 'MultiLocationV1',
          effects: 'Vec<XcmOrderV1>'
        },
        QueryHolding: {
          queryId: 'Compact<u64>',
          dest: 'MultiLocationV1',
          assets: 'MultiAssetFilterV1'
        },
        BuyExecution: {
          fees: 'MultiAsset',
          weight: 'u64',
          debt: 'u64',
          haltOnError: 'bool',
          orders: 'Vec<XcmOrderV1>',
          instructions: 'Vec<XcmV1>'
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v2 = {
    JunctionV2: 'JunctionV1',
    JunctionsV2: 'JunctionsV1',
    MultiAssetsV2: 'MultiAssetsV1',
    MultiAssetV2: 'MultiAssetV1',
    MultiAssetFilterV2: 'MultiAssetFilterV1',
    MultiLocationV2: 'MultiLocationV1',
    OriginKindV2: 'OriginKindV1',
    ResponseV2: {
      _enum: {
        Null: 'Null',
        Assets: 'MultiAssetsV2',
        ExecutionResult: 'ResponseV2Result'
      }
    },
    ResponseV2Error: '(u32, XcmErrorV2)',
    ResponseV2Result: 'Result<Null, ResponseV2Error>',
    WeightLimitV2: {
      _enum: {
        Unlimited: 'Null',
        Limited: 'Compact<u64>'
      }
    },
    InstructionV2: {
      _enum: {
        WithdrawAsset: 'MultiAssetsV2',
        ReserveAssetDeposited: 'MultiAssetsV2',
        ReceiveTeleportedAsset: 'MultiAssetsV2',
        QueryResponse: {
          queryId: 'Compact<u64>',
          response: 'ResponseV2',
          maxWeight: 'Compact<u64>'
        },
        TransferAsset: {
          assets: 'MultiAssetsV2',
          beneficiary: 'MultiLocationV2'
        },
        TransferReserveAsset: {
          assets: 'MultiAssetsV2',
          dest: 'MultiLocationV2',
          xcm: 'XcmV2'
        },
        Transact: {
          originType: 'OriginKindV2',
          requireWeightAtMost: 'u64',
          call: 'DoubleEncodedCall'
        },
        HrmpNewChannelOpenRequest: {
          sender: 'Compact<u32>',
          maxMessageSize: 'Compact<u32>',
          maxCapacity: 'Compact<u32>'
        },
        HrmpChannelAccepted: {
          recipient: 'Compact<u32>'
        },
        HrmpChannelClosing: {
          initiator: 'Compact<u32>',
          sender: 'Compact<u32>',
          recipient: 'Compact<u32>'
        },
        ClearOrigin: 'Null',
        DescendOrigin: 'InteriorMultiLocation',
        ReportError: {
          queryId: 'Compact<u64>',
          dest: 'MultiLocationV2',
          maxResponseWeight: 'Compact<u64>'
        },
        DepositAsset: {
          assets: 'MultiAssetFilterV2',
          maxAssets: 'u32',
          beneficiary: 'MultiLocationV2'
        },
        DepositReserveAsset: {
          assets: 'MultiAssetFilterV2',
          maxAssets: 'u32',
          dest: 'MultiLocationV2',
          xcm: 'XcmV2'
        },
        ExchangeAsset: {
          give: 'MultiAssetFilterV2',
          receive: 'MultiAssetsV2'
        },
        InitiateReserveWithdraw: {
          assets: 'MultiAssetFilterV2',
          reserve: 'MultiLocationV2',
          xcm: 'XcmV2'
        },
        InitiateTeleport: {
          assets: 'MultiAssetFilterV2',
          dest: 'MultiLocationV2',
          xcm: 'XcmV2'
        },
        QueryHolding: {
          query_id: 'Compact<u64>',
          dest: 'MultiLocationV2',
          assets: 'MultiAssetFilterV2',
          maxResponse_Weight: 'Compact<u64>'
        },
        BuyExecution: {
          fees: 'MultiAssetV2',
          weightLimit: 'WeightLimitV2'
        },
        RefundSurplus: 'Null',
        SetErrorHandler: 'XcmV2',
        SetAppendix: 'XcmV2',
        ClearError: 'Null',
        ClaimAsset: {
          assets: 'MultiAssetsV2',
          ticket: 'MultiLocationV2'
        },
        Trap: 'u64'
      }
    },
    XcmV2: 'Vec<InstructionV2>',
    XcmErrorV2: {
      _enum: {
        Undefined: 'Null',
        Overflow: 'Null',
        Unimplemented: 'Null',
        UnhandledXcmVersion: 'Null',
        UnhandledXcmMessage: 'Null',
        UnhandledEffect: 'Null',
        EscalationOfPrivilege: 'Null',
        UntrustedReserveLocation: 'Null',
        UntrustedTeleportLocation: 'Null',
        DestinationBufferOverflow: 'Null',
        MultiLocationFull: 'Null',
        MultiLocationNotInvertible: 'Null',
        FailedToDecode: 'Null',
        BadOrigin: 'Null',
        ExceedsMaxMessageSize: 'Null',
        FailedToTransactAsset: 'Null',
        WeightLimitReached: 'Weight',
        Wildcard: 'Null',
        TooMuchWeightRequired: 'Null',
        NotHoldingFees: 'Null',
        WeightNotComputable: 'Null',
        Barrier: 'Null',
        NotWithdrawable: 'Null',
        LocationCannotHold: 'Null',
        TooExpensive: 'Null',
        AssetNotFound: 'Null',
        DestinationUnsupported: 'Null',
        RecursionLimitReached: 'Null',
        Transport: 'Null',
        Unroutable: 'Null',
        UnknownWeightRequired: 'Null',
        Trap: 'u64',
        UnknownClaim: 'Null',
        InvalidLocation: 'Null'
      }
    }
  };

  function ownKeys$p(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$p(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$p(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$p(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const xcm = {
    XcmOrigin: {
      _enum: {
        Xcm: 'MultiLocation'
      }
    },
    Xcm: 'XcmV1',
    XcmpMessageFormat: {
      _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
    },
    XcmError: 'XcmErrorV1',
    XcmOrder: 'XcmOrderV1',
    XcmAssetId: {
      _enum: {
        Concrete: 'MultiLocation',
        Abstract: 'Bytes'
      }
    },
    AssetInstance: 'AssetInstanceV1',
    Fungibility: {
      _enum: {
        Fungible: 'u128',
        NonFungible: 'AssetInstance'
      }
    },
    InboundStatus: {
      _enum: ['Ok', 'Suspended']
    },
    OutboundStatus: {
      _enum: ['Ok', 'Suspended']
    },
    MultiAssetFilter: 'MultiAssetFilterV1',
    MultiAsset: 'MultiAssetV1',
    MultiAssets: 'Vec<MultiAsset>',
    WildFungibility: {
      _enum: ['Fungible', 'NonFungible']
    },
    WildMultiAsset: 'WildMultiAssetV1'
  };
  const location = {
    BodyId: {
      _enum: {
        Unit: 'Null',
        Named: 'Vec<u8>',
        Index: 'Compact<u32>',
        Executive: 'Null',
        Technical: 'Null',
        Legislative: 'Null',
        Judicial: 'Null'
      }
    },
    BodyPart: {
      _enum: {
        Voice: 'Null',
        Members: 'Compact<u32>',
        Fraction: {
          nom: 'Compact<u32>',
          denom: 'Compact<u32>'
        },
        AtLeastProportion: {
          nom: 'Compact<u32>',
          denom: 'Compact<u32>'
        },
        MoreThanProportion: {
          nom: 'Compact<u32>',
          denom: 'Compact<u32>'
        }
      }
    },
    InteriorMultiLocation: 'Junctions',
    Junction: 'JunctionV1',
    Junctions: 'JunctionsV1',
    MultiLocation: 'MultiLocationV1',
    NetworkId: {
      _enum: {
        Any: 'Null',
        Named: 'Vec<u8>',
        AXIA: 'Null',
        AXIALunar: 'Null'
      }
    }
  };
  const definitions$c = {
    rpc: {},
    types: _objectSpread$p(_objectSpread$p(_objectSpread$p(_objectSpread$p(_objectSpread$p(_objectSpread$p({}, location), xcm), v0$1), v1), v2), {}, {
      DoubleEncodedCall: {
        encoded: 'Vec<u8>'
      },
      XcmOriginKind: {
        _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
      },
      Response: 'ResponseV1',
      Outcome: {
        _enum: {
          Complete: 'Weight',
          Incomplete: '(Weight, XcmErrorV0)',
          Error: 'XcmErrorV0'
        }
      },
      QueryId: 'u64',
      QueryStatus: {
        _enum: {
          Pending: {
            responder: 'VersionedMultiLocation',
            maybeNotify: 'Option<(u8, u8)>',
            timeout: 'BlockNumber'
          },
          Ready: {
            response: 'VersionedResponse',
            at: 'BlockNumber'
          }
        }
      },
      QueueConfigData: {
        suspendThreshold: 'u32',
        dropThreshold: 'u32',
        resumeThreshold: 'u32',
        thresholdWeight: 'Weight',
        weightRestrictDecay: 'Weight'
      },
      VersionMigrationStage: {
        _enum: {
          MigrateSupportedVersion: 'Null',
          MigrateVersionNotifiers: 'Null',
          NotifyCurrentTargets: 'Option<Bytes>',
          MigrateAndNotifyOldTargets: 'Null'
        }
      },
      VersionedMultiAsset: {
        _enum: {
          V0: 'MultiAssetV0',
          V1: 'MultiAssetV1',
          V2: 'MultiAssetV2'
        }
      },
      VersionedMultiAssets: {
        _enum: {
          V0: 'Vec<MultiAssetV0>',
          V1: 'MultiAssetsV1',
          V2: 'MultiAssetsV2'
        }
      },
      VersionedMultiLocation: {
        _enum: {
          V0: 'MultiLocationV0',
          V1: 'MultiLocationV1',
          V2: 'MultiLocationV2'
        }
      },
      VersionedResponse: {
        V0: 'ResponseV0',
        V1: 'ResponseV1',
        V2: 'ResponseV2'
      },
      VersionedXcm: {
        _enum: {
          V0: 'XcmV0',
          V1: 'XcmV1',
          V2: 'XcmV2'
        }
      },
      XcmVersion: 'u32'
    })
  };

  function ownKeys$o(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$o(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$o(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$o(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const layout = {
    ContractCryptoHasher: {
      _enum: ['Blake2x256', 'Sha2x256', 'Keccak256']
    },
    ContractDiscriminant: 'u32',
    ContractLayoutArray: {
      offset: 'ContractLayoutKey',
      len: 'u32',
      cellsPerElem: 'u64',
      layout: 'ContractStorageLayout'
    },
    ContractLayoutCell: {
      key: 'ContractLayoutKey',
      ty: 'Si0LookupTypeId'
    },
    ContractLayoutEnum: {
      dispatchKey: 'ContractLayoutKey',
      variants: 'BTreeMap<ContractDiscriminant, ContractLayoutStruct>'
    },
    ContractLayoutHash: {
      offset: 'ContractLayoutKey',
      strategy: 'ContractLayoutHashingStrategy',
      layout: 'ContractStorageLayout'
    },
    ContractLayoutHashingStrategy: {
      hasher: 'ContractCryptoHasher',
      postfix: 'Vec<u8>',
      prefix: 'Vec<u8>'
    },
    ContractLayoutKey: '[u8; 32]',
    ContractLayoutStruct: {
      fields: 'Vec<ContractLayoutStructField>'
    },
    ContractLayoutStructField: {
      layout: 'ContractStorageLayout',
      name: 'Text'
    },
    ContractStorageLayout: {
      _enum: {
        Cell: 'ContractLayoutCell',
        Hash: 'ContractLayoutHash',
        Array: 'ContractLayoutArray',
        Struct: 'ContractLayoutStruct',
        Enum: 'ContractLayoutEnum'
      }
    }
  };
  const spec = {
    ContractConstructorSpec: {
      name: 'Text',
      selector: 'ContractSelector',
      args: 'Vec<ContractMessageParamSpec>',
      docs: 'Vec<Text>'
    },
    ContractContractSpec: {
      constructors: 'Vec<ContractConstructorSpec>',
      messages: 'Vec<ContractMessageSpec>',
      events: 'Vec<ContractEventSpec>',
      docs: 'Vec<Text>'
    },
    ContractDisplayName: 'Si0Path',
    ContractEventParamSpec: {
      name: 'Text',
      indexed: 'bool',
      type: 'ContractTypeSpec',
      docs: 'Vec<Text>'
    },
    ContractEventSpec: {
      name: 'Text',
      args: 'Vec<ContractEventParamSpec>',
      docs: 'Vec<Text>'
    },
    ContractMessageParamSpec: {
      name: 'Text',
      type: 'ContractTypeSpec'
    },
    ContractMessageSpec: {
      name: 'Text',
      selector: 'ContractSelector',
      mutates: 'bool',
      payable: 'bool',
      args: 'Vec<ContractMessageParamSpec>',
      returnType: 'Option<ContractTypeSpec>',
      docs: 'Vec<Text>'
    },
    ContractSelector: '[u8; 4]',
    ContractTypeSpec: {
      type: 'Si0LookupTypeId',
      displayName: 'ContractDisplayName'
    }
  };
  const definitions$b = {
    rpc: {},
    types: _objectSpread$o(_objectSpread$o(_objectSpread$o({}, layout), spec), {}, {
      ContractProject: {
        // added by ABI serialization
        metadataVersion: 'Text',
        source: 'ContractProjectSource',
        contract: 'ContractProjectContract',
        // expanded scale registry: RegistryReadOnly
        // NOTE Previous generation of the Si0Type definition
        types: 'Vec<Si0Type>',
        // renamed from layout (ignored for now, incomplete)
        // storage: 'ContractStorageLayout',
        spec: 'ContractContractSpec'
      },
      ContractProjectContract: {
        _alias: {
          docs: 'documentation'
        },
        name: 'Text',
        version: 'Text',
        authors: 'Vec<Text>',
        description: 'Option<Text>',
        docs: 'Option<Text>',
        repository: 'Option<Text>',
        homepage: 'Option<Text>',
        license: 'Option<Text>'
      },
      ContractProjectSource: {
        _alias: {
          wasmHash: 'hash'
        },
        wasmHash: '[u8; 32]',
        language: 'Text',
        compiler: 'Text',
        wasm: 'Raw'
      }
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v0 = {
    Si0Field: {
      name: 'Option<Text>',
      type: 'Si0LookupTypeId',
      typeName: 'Option<Text>',
      docs: 'Vec<Text>'
    },
    Si0LookupTypeId: 'u32',
    Si0Path: 'Vec<Text>',
    Si0Type: {
      path: 'Si0Path',
      params: 'Vec<Si0LookupTypeId>',
      def: 'Si0TypeDef'
    },
    Si0TypeDef: {
      _enum: {
        Composite: 'Si0TypeDefComposite',
        Variant: 'Si0TypeDefVariant',
        Sequence: 'Si0TypeDefSequence',
        Array: 'Si0TypeDefArray',
        Tuple: 'Si0TypeDefTuple',
        Primitive: 'Si0TypeDefPrimitive',
        Compact: 'Si0TypeDefCompact',
        Phantom: 'Si0TypeDefPhantom',
        BitSequence: 'Si0TypeDefBitSequence'
      }
    },
    Si0TypeDefArray: {
      len: 'u32',
      type: 'Si0LookupTypeId'
    },
    Si0TypeDefBitSequence: {
      bitStoreType: 'Si0LookupTypeId',
      bitOrderType: 'Si0LookupTypeId'
    },
    Si0TypeDefCompact: {
      type: 'Si0LookupTypeId'
    },
    Si0TypeDefComposite: {
      fields: 'Vec<Si0Field>'
    },
    Si0TypeDefPhantom: 'Null',
    Si0TypeDefVariant: {
      variants: 'Vec<Si0Variant>'
    },
    Si0TypeDefPrimitive: {
      _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'I8', 'I16', 'I32', 'I64', 'I128', 'I256']
    },
    Si0TypeDefSequence: {
      type: 'Si0LookupTypeId'
    },
    Si0TypeDefTuple: 'Vec<Si0LookupTypeId>',
    Si0TypeParameter: {
      name: 'Text',
      type: 'Option<Si0LookupTypeId>'
    },
    Si0Variant: {
      name: 'Text',
      fields: 'Vec<Si0Field>',
      index: 'Option<u8>',
      discriminant: 'Option<u64>',
      docs: 'Vec<Text>'
    }
  };

  function ownKeys$n(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$n(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$n(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$n(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /* eslint-disable sort-keys */

  const SiVariant = {
    name: 'Text',
    fields: 'Vec<SiField>',
    index: 'u8',
    docs: 'Vec<Text>'
  };
  const definitions$a = {
    rpc: {},
    types: _objectSpread$n(_objectSpread$n({}, v0), {}, {
      SiField: {
        name: 'Option<Text>',
        type: 'SiLookupTypeId',
        typeName: 'Option<Text>',
        docs: 'Vec<Text>'
      },
      SiLookupTypeId: 'Compact<u32>',
      SiPath: 'Vec<Text>',
      SiType: {
        path: 'SiPath',
        params: 'Vec<SiTypeParameter>',
        def: 'SiTypeDef',
        docs: 'Vec<Text>'
      },
      SiTypeDef: {
        _enum: {
          Composite: 'SiTypeDefComposite',
          Variant: 'SiTypeDefVariant',
          Sequence: 'SiTypeDefSequence',
          Array: 'SiTypeDefArray',
          Tuple: 'SiTypeDefTuple',
          Primitive: 'SiTypeDefPrimitive',
          Compact: 'SiTypeDefCompact',
          BitSequence: 'SiTypeDefBitSequence',
          // NOTE: This is specific to the implementation for pre-v14 metadata
          // compatibility (always keep this as the last entry in the enum)
          HistoricMetaCompat: 'Type'
        }
      },
      SiTypeDefArray: {
        len: 'u32',
        type: 'SiLookupTypeId'
      },
      SiTypeDefBitSequence: {
        bitStoreType: 'SiLookupTypeId',
        bitOrderType: 'SiLookupTypeId'
      },
      SiTypeDefCompact: {
        type: 'SiLookupTypeId'
      },
      SiTypeDefComposite: {
        fields: 'Vec<SiField>'
      },
      SiTypeDefPrimitive: {
        _enum: ['Bool', 'Char', 'Str', 'U8', 'U16', 'U32', 'U64', 'U128', 'U256', 'I8', 'I16', 'I32', 'I64', 'I128', 'I256']
      },
      SiTypeDefSequence: {
        type: 'SiLookupTypeId'
      },
      SiTypeDefTuple: 'Vec<SiLookupTypeId>',
      SiTypeParameter: {
        name: 'Text',
        type: 'Option<SiLookupTypeId>'
      },
      SiTypeDefVariant: {
        variants: 'Vec<SiVariant>'
      },
      SiVariant
    })
  };

  function ownKeys$m(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$m(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$m(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$m(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // As per frontier
  // We use aliasSection here to override since these are in another namespace
  const netRpc = {
    listening: {
      aliasSection: 'net',
      description: 'Returns true if client is actively listening for network connections. Otherwise false.',
      params: [],
      type: 'bool'
    },
    peerCount: {
      aliasSection: 'net',
      description: 'Returns number of peers connected to node.',
      params: [],
      type: 'String'
    },
    version: {
      aliasSection: 'net',
      description: 'Returns protocol version.',
      params: [],
      type: 'String'
    }
  };
  const web3Rpc = {
    clientVersion: {
      aliasSection: 'web3',
      description: 'Returns current client version.',
      params: [],
      type: 'String'
    },
    sha3: {
      aliasSection: 'web3',
      description: 'Returns sha3 of the given data',
      params: [{
        name: 'data',
        type: 'Bytes'
      }],
      type: 'H256'
    }
  };
  const rpc = _objectSpread$m(_objectSpread$m(_objectSpread$m({}, netRpc), web3Rpc), {}, {
    accounts: {
      description: 'Returns accounts list.',
      params: [],
      type: 'Vec<H160>'
    },
    blockNumber: {
      description: 'Returns the blockNumber',
      params: [],
      type: 'U256'
    },
    call: {
      description: 'Call contract, returning the output data.',
      params: [{
        name: 'request',
        type: 'EthCallRequest'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'Bytes'
    },
    chainId: {
      description: 'Returns the chain ID used for transaction signing at the current best block. None is returned if not available.',
      params: [],
      type: 'U64'
    },
    coinbase: {
      description: 'Returns block author.',
      params: [],
      type: 'H160'
    },
    estimateGas: {
      description: 'Estimate gas needed for execution of given contract.',
      params: [{
        name: 'request',
        type: 'EthCallRequest'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'U256'
    },
    gasPrice: {
      description: 'Returns current gas price.',
      params: [],
      type: 'U256'
    },
    getBalance: {
      description: 'Returns balance of the given account.',
      params: [{
        name: 'address',
        type: 'H160'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'U256'
    },
    getBlockByHash: {
      description: 'Returns block with given hash.',
      params: [{
        name: 'hash',
        type: 'H256'
      }, {
        name: 'full',
        type: 'bool'
      }],
      type: 'Option<EthRichBlock>'
    },
    getBlockByNumber: {
      description: 'Returns block with given number.',
      params: [{
        name: 'block',
        type: 'BlockNumber'
      }, {
        name: 'full',
        type: 'bool'
      }],
      type: 'Option<EthRichBlock>'
    },
    getBlockTransactionCountByHash: {
      description: 'Returns the number of transactions in a block with given hash.',
      params: [{
        name: 'hash',
        type: 'H256'
      }],
      type: 'U256'
    },
    getBlockTransactionCountByNumber: {
      description: 'Returns the number of transactions in a block with given block number.',
      params: [{
        name: 'block',
        type: 'BlockNumber'
      }],
      type: 'U256'
    },
    getCode: {
      description: 'Returns the code at given address at given time (block number).',
      params: [{
        name: 'address',
        type: 'H160'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'Bytes'
    },
    getFilterChanges: {
      description: 'Returns filter changes since last poll.',
      params: [{
        name: 'index',
        type: 'U256'
      }],
      type: 'EthFilterChanges'
    },
    getFilterLogs: {
      description: 'Returns all logs matching given filter (in a range \'from\' - \'to\').',
      params: [{
        name: 'index',
        type: 'U256'
      }],
      type: 'Vec<EthLog>'
    },
    getLogs: {
      description: 'Returns logs matching given filter object.',
      params: [{
        name: 'filter',
        type: 'EthFilter'
      }],
      type: 'Vec<EthLog>'
    },
    getProof: {
      description: 'Returns proof for account and storage.',
      params: [{
        name: 'address',
        type: 'H160'
      }, {
        name: 'storageKeys',
        type: 'Vec<H256>'
      }, {
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'EthAccount'
    },
    getStorageAt: {
      description: 'Returns content of the storage at given address.',
      params: [{
        name: 'address',
        type: 'H160'
      }, {
        name: 'index',
        type: 'U256'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'H256'
    },
    getTransactionByBlockHashAndIndex: {
      description: 'Returns transaction at given block hash and index.',
      params: [{
        name: 'hash',
        type: 'H256'
      }, {
        name: 'index',
        type: 'U256'
      }],
      type: 'EthTransaction'
    },
    getTransactionByBlockNumberAndIndex: {
      description: 'Returns transaction by given block number and index.',
      params: [{
        name: 'number',
        type: 'BlockNumber'
      }, {
        name: 'index',
        type: 'U256'
      }],
      type: 'EthTransaction'
    },
    getTransactionByHash: {
      description: 'Get transaction by its hash.',
      params: [{
        name: 'hash',
        type: 'H256'
      }],
      type: 'EthTransaction'
    },
    getTransactionCount: {
      description: 'Returns the number of transactions sent from given address at given time (block number).',
      params: [{
        name: 'hash',
        type: 'H256'
      }, {
        isOptional: true,
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'U256'
    },
    getTransactionReceipt: {
      description: 'Returns transaction receipt by transaction hash.',
      params: [{
        name: 'hash',
        type: 'H256'
      }],
      type: 'EthReceipt'
    },
    getUncleByBlockHashAndIndex: {
      description: 'Returns an uncles at given block and index.',
      params: [{
        name: 'hash',
        type: 'H256'
      }, {
        name: 'index',
        type: 'U256'
      }],
      type: 'EthRichBlock'
    },
    getUncleByBlockNumberAndIndex: {
      description: 'Returns an uncles at given block and index.',
      params: [{
        name: 'number',
        type: 'BlockNumber'
      }, {
        name: 'index',
        type: 'U256'
      }],
      type: 'EthRichBlock'
    },
    getUncleCountByBlockHash: {
      description: 'Returns the number of uncles in a block with given hash.',
      params: [{
        name: 'hash',
        type: 'H256'
      }],
      type: 'U256'
    },
    getUncleCountByBlockNumber: {
      description: 'Returns the number of uncles in a block with given block number.',
      params: [{
        name: 'number',
        type: 'BlockNumber'
      }],
      type: 'U256'
    },
    getWork: {
      description: 'Returns the hash of the current block, the seedHash, and the boundary condition to be met.',
      params: [],
      type: 'EthWork'
    },
    hashrate: {
      description: 'Returns the number of hashes per second that the node is mining with.',
      params: [],
      type: 'U256'
    },
    mining: {
      description: 'Returns true if client is actively mining new blocks.',
      params: [],
      type: 'bool'
    },
    newBlockFilter: {
      description: 'Returns id of new block filter.',
      params: [],
      type: 'U256'
    },
    newFilter: {
      description: 'Returns id of new filter.',
      params: [{
        name: 'filter',
        type: 'EthFilter'
      }],
      type: 'U256'
    },
    newPendingTransactionFilter: {
      description: 'Returns id of new block filter.',
      params: [],
      type: 'U256'
    },
    protocolVersion: {
      description: 'Returns protocol version encoded as a string (quotes are necessary).',
      params: [],
      type: 'u64'
    },
    sendRawTransaction: {
      description: 'Sends signed transaction, returning its hash.',
      params: [{
        name: 'bytes',
        type: 'Bytes'
      }],
      type: 'H256'
    },
    sendTransaction: {
      description: 'Sends transaction; will block waiting for signer to return the transaction hash',
      params: [{
        name: 'tx',
        type: 'EthTransactionRequest'
      }],
      type: 'H256'
    },
    submitHashrate: {
      description: 'Used for submitting mining hashrate.',
      params: [{
        name: 'index',
        type: 'U256'
      }, {
        name: 'hash',
        type: 'H256'
      }],
      type: 'bool'
    },
    submitWork: {
      description: 'Used for submitting a proof-of-work solution.',
      params: [{
        name: 'nonce',
        type: 'H64'
      }, {
        name: 'headerHash',
        type: 'H256'
      }, {
        name: 'mixDigest',
        type: 'H256'
      }],
      type: 'bool'
    },
    subscribe: {
      description: 'Subscribe to Eth subscription.',
      params: [{
        name: 'kind',
        type: 'EthSubKind'
      }, {
        isOptional: true,
        name: 'params',
        type: 'EthSubParams'
      }],
      pubsub: ['subscription', 'subscribe', 'unsubscribe'],
      type: 'Null'
    },
    syncing: {
      description: 'Returns an object with data about the sync status or false.',
      params: [],
      type: 'EthSyncStatus'
    },
    uninstallFilter: {
      description: 'Uninstalls filter.',
      params: [{
        name: 'index',
        type: 'U256'
      }],
      type: 'bool'
    }
  });

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const types = {
    EthereumAccountId: 'GenericEthereumAccountId',
    EthereumLookupSource: 'GenericEthereumLookupSource',
    EthereumSignature: '[u8; 65]',
    EthAccount: {
      address: 'H160',
      balance: 'U256',
      nonce: 'U256',
      codeHash: 'H256',
      storageHash: 'H256',
      accountProof: 'Vec<Bytes>',
      storageProof: 'Vec<EthStorageProof>'
    },
    EthBlock: {
      header: 'EthHeader',
      transactions: 'Vec<EthTransaction>',
      ommers: 'Vec<EthHeader>'
    },
    EthHeader: {
      parentHash: 'H256',
      ommersHash: 'H256',
      beneficiary: 'H160',
      stateRoot: 'H256',
      transactionsRoot: 'H256',
      receiptsRoot: 'H256',
      logsBloom: 'EthBloom',
      difficulty: 'U256',
      number: 'U256',
      gasLimit: 'U256',
      gasUsed: 'U256',
      timestamp: 'u64',
      extraData: 'Bytes',
      mixMash: 'H256',
      nonce: 'H64'
    },
    EthRichBlock: {
      _alias: {
        blockHash: 'hash',
        blockSize: 'size'
      },
      blockHash: 'Option<H256>',
      parentHash: 'H256',
      sha3Uncles: 'H256',
      author: 'H160',
      miner: 'H160',
      stateRoot: 'H256',
      transactionsRoot: 'H256',
      receiptsRoot: 'H256',
      number: 'Option<U256>',
      gasUsed: 'U256',
      gasLimit: 'U256',
      extraData: 'Bytes',
      logsBloom: 'EthBloom',
      timestamp: 'U256',
      difficulty: 'U256',
      totalDifficulty: 'Option<U256>',
      sealFields: 'Vec<Bytes>',
      uncles: 'Vec<H256>',
      transactions: 'Vec<EthTransaction>',
      blockSize: 'Option<U256>'
    },
    EthBloom: 'H2048',
    EthCallRequest: {
      from: 'Option<H160>',
      to: 'Option<H160>',
      gasPrice: 'Option<U256>',
      gas: 'Option<U256>',
      value: 'Option<U256>',
      data: 'Option<Bytes>',
      nonce: 'Option<U256>'
    },
    EthFilter: {
      fromBlock: 'Option<BlockNumber>',
      toBlock: 'Option<BlockNumber>',
      blockHash: 'Option<H256>',
      address: 'Option<EthFilterAddress>',
      topics: 'Option<EthFilterTopic>'
    },
    EthFilterAddress: {
      _enum: {
        Single: 'H160',
        Multiple: 'Vec<H160>',
        Null: 'Null'
      }
    },
    EthFilterChanges: {
      _enum: {
        Logs: 'Vec<EthLog>',
        Hashes: 'Vec<H256>',
        Empty: 'Null'
      }
    },
    EthFilterTopic: {
      _enum: {
        Single: 'EthFilterTopicInner',
        Multiple: 'Vec<EthFilterTopicInner>',
        Null: 'Null'
      }
    },
    EthFilterTopicEntry: 'Option<H256>',
    EthFilterTopicInner: {
      _enum: {
        Single: 'EthFilterTopicEntry',
        Multiple: 'Vec<EthFilterTopicEntry>',
        Null: 'Null'
      }
    },
    EthRichHeader: {
      _alias: {
        blockHash: 'hash',
        blockSize: 'size'
      },
      blockHash: 'Option<H256>',
      parentHash: 'H256',
      sha3Uncles: 'H256',
      author: 'H160',
      miner: 'H160',
      stateRoot: 'H256',
      transactionsRoot: 'H256',
      receiptsRoot: 'H256',
      number: 'Option<U256>',
      gasUsed: 'U256',
      gasLimit: 'U256',
      extraData: 'Bytes',
      logsBloom: 'EthBloom',
      timestamp: 'U256',
      difficulty: 'U256',
      sealFields: 'Vec<Bytes>',
      blockSize: 'Option<U256>'
    },
    EthLog: {
      address: 'H160',
      topics: 'Vec<H256>',
      data: 'Bytes',
      blockHash: 'Option<H256>',
      blockNumber: 'Option<U256>',
      transactionHash: 'Option<H256>',
      transactionIndex: 'Option<U256>',
      logIndex: 'Option<U256>',
      transactionLogIndex: 'Option<U256>',
      removed: 'bool'
    },
    EthReceipt: {
      transactionHash: 'Option<H256>',
      transactionIndex: 'Option<U256>',
      blockHash: 'Option<H256>',
      from: 'Option<H160>',
      to: 'Option<H160>',
      blockNumber: 'Option<U256>',
      cumulativeGasUsed: 'U256',
      gasUsed: 'Option<U256>',
      contractAddress: 'Option<H160>',
      logs: 'Vec<EthLog>',
      root: 'Option<H256>',
      logsBloom: 'EthBloom',
      statusCode: 'Option<U64>'
    },
    EthStorageProof: {
      key: 'U256',
      value: 'U256',
      proof: 'Vec<Bytes>'
    },
    EthSubKind: {
      _enum: ['newHeads', 'logs', 'newPendingTransactions', 'syncing']
    },
    EthSubParams: {
      _enum: {
        None: 'Null',
        Logs: 'EthFilter'
      }
    },
    EthSubResult: {
      _enum: {
        Header: 'EthRichHeader',
        Log: 'EthLog',
        TransactionHash: 'H256',
        SyncState: 'EthSyncStatus'
      }
    },
    EthSyncInfo: {
      startingBlock: 'U256',
      currentBlock: 'U256',
      highestBlock: 'U256',
      warpChunksAmount: 'Option<U256>',
      warpChunksProcessed: 'Option<U256>'
    },
    EthSyncStatus: {
      _enum: {
        Info: 'EthSyncInfo',
        None: 'Null'
      }
    },
    EthTransaction: {
      nonce: 'U256',
      gasPrice: 'U256',
      gasLimit: 'U256',
      action: 'EthTransactionAction',
      value: 'U256',
      input: 'Bytes',
      signature: 'EthTransactionSignature'
    },
    EthTransactionSignature: {
      v: 'u64',
      r: 'H256',
      s: 'H256'
    },
    EthTransactionAction: {
      _enum: {
        Call: 'H160',
        Create: 'Null'
      }
    },
    EthTransactionCondition: {
      _enum: {
        block: 'u64',
        time: 'u64'
      }
    },
    EthTransactionRequest: {
      from: 'Option<H160>',
      to: 'Option<H160>',
      gasPrice: 'Option<U256>',
      gas: 'Option<U256>',
      value: 'Option<U256>',
      data: 'Option<Bytes>',
      nonce: 'Option<U256>'
    },
    EthTransactionStatus: {
      transactionHash: 'H256',
      transactionIndex: 'u32',
      from: 'H160',
      to: 'Option<H160>',
      contractAddress: 'Option<H160>',
      logs: 'Vec<EthLog>',
      logsBloom: 'EthBloom'
    },
    EthWork: {
      powHash: 'H256',
      seedHash: 'H256',
      target: 'H256',
      number: 'Option<u64>'
    }
  };
  const definitions$9 = {
    rpc,
    types
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const AllHashers = {
    Blake2_128: null,
    // eslint-disable-line camelcase
    Blake2_256: null,
    // eslint-disable-line camelcase
    Blake2_128Concat: null,
    // eslint-disable-line camelcase
    Twox128: null,
    Twox256: null,
    Twox64Concat: null,
    // new in v11
    Identity: null
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v9 = {
    // v9
    ErrorMetadataV9: {
      name: 'Text',
      docs: 'Vec<Text>'
    },
    EventMetadataV9: {
      name: 'Text',
      args: 'Vec<Type>',
      docs: 'Vec<Text>'
    },
    FunctionArgumentMetadataV9: {
      name: 'Text',
      type: 'Type'
    },
    FunctionMetadataV9: {
      name: 'Text',
      args: 'Vec<FunctionArgumentMetadataV9>',
      docs: 'Vec<Text>'
    },
    MetadataV9: {
      modules: 'Vec<ModuleMetadataV9>'
    },
    ModuleConstantMetadataV9: {
      name: 'Text',
      type: 'Type',
      value: 'Bytes',
      docs: 'Vec<Text>'
    },
    ModuleMetadataV9: {
      name: 'Text',
      storage: 'Option<StorageMetadataV9>',
      calls: 'Option<Vec<FunctionMetadataV9>>',
      events: 'Option<Vec<EventMetadataV9>>',
      constants: 'Vec<ModuleConstantMetadataV9>',
      errors: 'Vec<ErrorMetadataV9>'
    },
    StorageEntryMetadataV9: {
      name: 'Text',
      modifier: 'StorageEntryModifierV9',
      type: 'StorageEntryTypeV9',
      fallback: 'Bytes',
      docs: 'Vec<Text>'
    },
    StorageEntryModifierV9: {
      _enum: ['Optional', 'Default', 'Required']
    },
    StorageEntryTypeV9: {
      _enum: {
        Plain: 'Type',
        Map: {
          hasher: 'StorageHasherV9',
          key: 'Type',
          value: 'Type',
          linked: 'bool'
        },
        DoubleMap: {
          hasher: 'StorageHasherV9',
          key1: 'Type',
          key2: 'Type',
          value: 'Type',
          key2Hasher: 'StorageHasherV9'
        }
      }
    },
    StorageHasherV9: {
      _enum: {
        Blake2_128: null,
        // eslint-disable-line camelcase
        Blake2_256: null,
        // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    },
    StorageMetadataV9: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV9>'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v10 = {
    // v10
    ErrorMetadataV10: 'ErrorMetadataV9',
    EventMetadataV10: 'EventMetadataV9',
    FunctionArgumentMetadataV10: 'FunctionArgumentMetadataV9',
    FunctionMetadataV10: 'FunctionMetadataV9',
    MetadataV10: {
      modules: 'Vec<ModuleMetadataV10>'
    },
    ModuleConstantMetadataV10: 'ModuleConstantMetadataV9',
    ModuleMetadataV10: {
      name: 'Text',
      storage: 'Option<StorageMetadataV10>',
      calls: 'Option<Vec<FunctionMetadataV10>>',
      events: 'Option<Vec<EventMetadataV10>>',
      constants: 'Vec<ModuleConstantMetadataV10>',
      errors: 'Vec<ErrorMetadataV10>'
    },
    StorageEntryModifierV10: 'StorageEntryModifierV9',
    StorageEntryMetadataV10: {
      name: 'Text',
      modifier: 'StorageEntryModifierV10',
      type: 'StorageEntryTypeV10',
      fallback: 'Bytes',
      docs: 'Vec<Text>'
    },
    StorageEntryTypeV10: {
      _enum: {
        Plain: 'Type',
        Map: {
          hasher: 'StorageHasherV10',
          key: 'Type',
          value: 'Type',
          linked: 'bool'
        },
        DoubleMap: {
          hasher: 'StorageHasherV10',
          key1: 'Type',
          key2: 'Type',
          value: 'Type',
          key2Hasher: 'StorageHasherV10'
        }
      }
    },
    StorageMetadataV10: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV10>'
    },
    StorageHasherV10: {
      _enum: {
        Blake2_128: null,
        // eslint-disable-line camelcase
        Blake2_256: null,
        // eslint-disable-line camelcase
        Blake2_128Concat: null,
        // eslint-disable-line camelcase
        Twox128: null,
        Twox256: null,
        Twox64Concat: null
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const v11 = {
    // v11
    ErrorMetadataV11: 'ErrorMetadataV10',
    EventMetadataV11: 'EventMetadataV10',
    ExtrinsicMetadataV11: {
      version: 'u8',
      signedExtensions: 'Vec<Text>'
    },
    FunctionArgumentMetadataV11: 'FunctionArgumentMetadataV10',
    FunctionMetadataV11: 'FunctionMetadataV10',
    MetadataV11: {
      modules: 'Vec<ModuleMetadataV11>',
      extrinsic: 'ExtrinsicMetadataV11'
    },
    ModuleConstantMetadataV11: 'ModuleConstantMetadataV10',
    ModuleMetadataV11: {
      name: 'Text',
      storage: 'Option<StorageMetadataV11>',
      calls: 'Option<Vec<FunctionMetadataV11>>',
      events: 'Option<Vec<EventMetadataV11>>',
      constants: 'Vec<ModuleConstantMetadataV11>',
      errors: 'Vec<ErrorMetadataV11>'
    },
    StorageEntryModifierV11: 'StorageEntryModifierV10',
    StorageEntryMetadataV11: {
      name: 'Text',
      modifier: 'StorageEntryModifierV11',
      type: 'StorageEntryTypeV11',
      fallback: 'Bytes',
      docs: 'Vec<Text>'
    },
    StorageEntryTypeV11: {
      _enum: {
        Plain: 'Type',
        Map: {
          hasher: 'StorageHasherV11',
          key: 'Type',
          value: 'Type',
          linked: 'bool'
        },
        DoubleMap: {
          hasher: 'StorageHasherV11',
          key1: 'Type',
          key2: 'Type',
          value: 'Type',
          key2Hasher: 'StorageHasherV11'
        }
      }
    },
    StorageMetadataV11: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV11>'
    },
    StorageHasherV11: {
      _enum: AllHashers
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v12 = {
    // v12
    ErrorMetadataV12: 'ErrorMetadataV11',
    EventMetadataV12: 'EventMetadataV11',
    ExtrinsicMetadataV12: 'ExtrinsicMetadataV11',
    FunctionArgumentMetadataV12: 'FunctionArgumentMetadataV11',
    FunctionMetadataV12: 'FunctionMetadataV11',
    MetadataV12: {
      modules: 'Vec<ModuleMetadataV12>',
      extrinsic: 'ExtrinsicMetadataV12'
    },
    ModuleConstantMetadataV12: 'ModuleConstantMetadataV11',
    ModuleMetadataV12: {
      name: 'Text',
      storage: 'Option<StorageMetadataV12>',
      calls: 'Option<Vec<FunctionMetadataV12>>',
      events: 'Option<Vec<EventMetadataV12>>',
      constants: 'Vec<ModuleConstantMetadataV12>',
      errors: 'Vec<ErrorMetadataV12>',
      index: 'u8'
    },
    StorageEntryModifierV12: 'StorageEntryModifierV11',
    StorageEntryMetadataV12: 'StorageEntryMetadataV11',
    StorageEntryTypeV12: 'StorageEntryTypeV11',
    StorageMetadataV12: 'StorageMetadataV11',
    StorageHasherV12: 'StorageHasherV11'
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const v13 = {
    // v13
    ErrorMetadataV13: 'ErrorMetadataV12',
    EventMetadataV13: 'EventMetadataV12',
    ExtrinsicMetadataV13: 'ExtrinsicMetadataV12',
    FunctionArgumentMetadataV13: 'FunctionArgumentMetadataV12',
    FunctionMetadataV13: 'FunctionMetadataV12',
    MetadataV13: {
      modules: 'Vec<ModuleMetadataV13>',
      extrinsic: 'ExtrinsicMetadataV13'
    },
    ModuleConstantMetadataV13: 'ModuleConstantMetadataV12',
    ModuleMetadataV13: {
      name: 'Text',
      storage: 'Option<StorageMetadataV13>',
      calls: 'Option<Vec<FunctionMetadataV13>>',
      events: 'Option<Vec<EventMetadataV13>>',
      constants: 'Vec<ModuleConstantMetadataV13>',
      errors: 'Vec<ErrorMetadataV13>',
      index: 'u8'
    },
    StorageEntryModifierV13: 'StorageEntryModifierV12',
    StorageEntryMetadataV13: {
      name: 'Text',
      modifier: 'StorageEntryModifierV13',
      type: 'StorageEntryTypeV13',
      fallback: 'Bytes',
      docs: 'Vec<Text>'
    },
    StorageEntryTypeV13: {
      _enum: {
        Plain: 'Type',
        Map: {
          hasher: 'StorageHasherV13',
          key: 'Type',
          value: 'Type',
          linked: 'bool'
        },
        DoubleMap: {
          hasher: 'StorageHasherV13',
          key1: 'Type',
          key2: 'Type',
          value: 'Type',
          key2Hasher: 'StorageHasherV13'
        },
        NMap: {
          keyVec: 'Vec<Type>',
          hashers: 'Vec<StorageHasherV13>',
          value: 'Type'
        }
      }
    },
    StorageMetadataV13: {
      prefix: 'Text',
      items: 'Vec<StorageEntryMetadataV13>'
    },
    StorageHasherV13: 'StorageHasherV12'
  };

  function ownKeys$l(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$l(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$l(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$l(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const v14 = {
    // registry
    PortableRegistry: 'GenericPortableRegistry',
    PortableType: {
      id: 'SiLookupTypeId',
      type: 'SiType'
    },
    // compatibility with earlier layouts, i.e. don't break previous users
    ErrorMetadataV14: _objectSpread$l(_objectSpread$l({}, SiVariant), {}, {
      args: 'Vec<Type>'
    }),
    EventMetadataV14: _objectSpread$l(_objectSpread$l({}, SiVariant), {}, {
      args: 'Vec<Type>'
    }),
    FunctionArgumentMetadataV14: 'FunctionArgumentMetadataV13',
    FunctionMetadataV14: _objectSpread$l(_objectSpread$l({}, SiVariant), {}, {
      args: 'Vec<FunctionArgumentMetadataLatest>'
    }),
    // V14
    ExtrinsicMetadataV14: {
      type: 'SiLookupTypeId',
      version: 'u8',
      signedExtensions: 'Vec<SignedExtensionMetadataV14>'
    },
    MetadataV14: {
      lookup: 'PortableRegistry',
      pallets: 'Vec<PalletMetadataV14>',
      extrinsic: 'ExtrinsicMetadataV14'
    },
    PalletCallMetadataV14: {
      type: 'SiLookupTypeId'
    },
    PalletConstantMetadataV14: {
      name: 'Text',
      type: 'SiLookupTypeId',
      value: 'Bytes',
      docs: 'Vec<Text>'
    },
    PalletErrorMetadataV14: {
      type: 'SiLookupTypeId'
    },
    PalletEventMetadataV14: {
      type: 'SiLookupTypeId'
    },
    PalletMetadataV14: {
      name: 'Text',
      storage: 'Option<PalletStorageMetadataV14>',
      calls: 'Option<PalletCallMetadataV14>',
      events: 'Option<PalletEventMetadataV14>',
      constants: 'Vec<PalletConstantMetadataV14>',
      errors: 'Option<PalletErrorMetadataV14>',
      index: 'u8'
    },
    PalletStorageMetadataV14: {
      prefix: 'Text',
      // NOTE: Renamed from entries
      items: 'Vec<StorageEntryMetadataV14>'
    },
    SignedExtensionMetadataV14: {
      identifier: 'Text',
      type: 'SiLookupTypeId',
      additionalSigned: 'SiLookupTypeId'
    },
    StorageEntryMetadataV14: {
      name: 'Text',
      modifier: 'StorageEntryModifierV14',
      type: 'StorageEntryTypeV14',
      fallback: 'Bytes',
      docs: 'Vec<Text>'
    },
    StorageEntryModifierV14: 'StorageEntryModifierV13',
    StorageEntryTypeV14: {
      _enum: {
        Plain: 'SiLookupTypeId',
        Map: {
          hashers: 'Vec<StorageHasherV14>',
          key: 'SiLookupTypeId',
          // NOTE: Renamed from "keys"
          value: 'SiLookupTypeId'
        }
      }
    },
    StorageHasherV14: 'StorageHasherV13'
  };

  function ownKeys$k(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$k(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$k(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$k(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const definitions$8 = {
    rpc: {},
    types: _objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k(_objectSpread$k({}, v9), v10), v11), v12), v13), v14), {}, {
      // latest mappings
      ErrorMetadataLatest: 'ErrorMetadataV14',
      EventMetadataLatest: 'EventMetadataV14',
      ExtrinsicMetadataLatest: 'ExtrinsicMetadataV14',
      FunctionArgumentMetadataLatest: 'FunctionArgumentMetadataV14',
      FunctionMetadataLatest: 'FunctionMetadataV14',
      MetadataLatest: 'MetadataV14',
      PalletCallMetadataLatest: 'PalletCallMetadataV14',
      PalletConstantMetadataLatest: 'PalletConstantMetadataV14',
      PalletErrorMetadataLatest: 'PalletErrorMetadataV14',
      PalletEventMetadataLatest: 'PalletEventMetadataV14',
      PalletMetadataLatest: 'PalletMetadataV14',
      PalletStorageMetadataLatest: 'PalletStorageMetadataV14',
      SignedExtensionMetadataLatest: 'SignedExtensionMetadataV14',
      StorageEntryMetadataLatest: 'StorageEntryMetadataV14',
      StorageEntryModifierLatest: 'StorageEntryModifierV14',
      StorageEntryTypeLatest: 'StorageEntryTypeV14',
      StorageHasher: 'StorageHasherV14',
      // the enum containing all the mappings
      MetadataAll: {
        _enum: {
          V0: 'DoNotConstruct<MetadataV0>',
          V1: 'DoNotConstruct<MetadataV1>',
          V2: 'DoNotConstruct<MetadataV2>',
          V3: 'DoNotConstruct<MetadataV3>',
          V4: 'DoNotConstruct<MetadataV4>',
          V5: 'DoNotConstruct<MetadataV5>',
          V6: 'DoNotConstruct<MetadataV6>',
          V7: 'DoNotConstruct<MetadataV7>',
          V8: 'DoNotConstruct<MetadataV8>',
          // First version on AXIALunar in V9, dropping will be problematic
          V9: 'MetadataV9',
          V10: 'MetadataV10',
          V11: 'MetadataV11',
          V12: 'MetadataV12',
          V13: 'MetadataV13',
          V14: 'MetadataV14'
        }
      }
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$7 = {
    rpc: {
      methods: {
        description: 'Retrieves the list of RPC methods that are exposed by the node',
        params: [],
        type: 'RpcMethods'
      }
    },
    types: {
      RpcMethods: {
        version: 'u32',
        methods: 'Vec<Text>'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$6 = {
    rpc: {
      hasKey: {
        description: 'Returns true if the keystore has private keys for the given public key and key type.',
        params: [{
          name: 'publicKey',
          type: 'Bytes'
        }, {
          name: 'keyType',
          type: 'Text'
        }],
        type: 'bool'
      },
      hasSessionKeys: {
        description: 'Returns true if the keystore has private keys for the given session public keys.',
        params: [{
          name: 'sessionKeys',
          type: 'Bytes'
        }],
        type: 'bool'
      },
      removeExtrinsic: {
        description: 'Remove given extrinsic from the pool and temporarily ban it to prevent reimporting',
        params: [{
          name: 'bytesOrHash',
          type: 'Vec<ExtrinsicOrHash>'
        }],
        type: 'Vec<Hash>'
      },
      insertKey: {
        description: 'Insert a key into the keystore.',
        params: [{
          name: 'keyType',
          type: 'Text'
        }, {
          name: 'suri',
          type: 'Text'
        }, {
          name: 'publicKey',
          type: 'Bytes'
        }],
        type: 'Bytes'
      },
      rotateKeys: {
        description: 'Generate new session keys and returns the corresponding public keys',
        params: [],
        type: 'Bytes'
      },
      pendingExtrinsics: {
        description: 'Returns all pending extrinsics, potentially grouped by sender',
        params: [],
        type: 'Vec<Extrinsic>'
      },
      submitExtrinsic: {
        isSigned: true,
        description: 'Submit a fully formatted extrinsic for block inclusion',
        params: [{
          name: 'extrinsic',
          type: 'Extrinsic'
        }],
        type: 'Hash'
      },
      submitAndWatchExtrinsic: {
        description: 'Submit and subscribe to watch an extrinsic until unsubscribed',
        isSigned: true,
        params: [{
          name: 'extrinsic',
          type: 'Extrinsic'
        }],
        pubsub: ['extrinsicUpdate', 'submitAndWatchExtrinsic', 'unwatchExtrinsic'],
        type: 'ExtrinsicStatus'
      }
    },
    types: {
      ExtrinsicOrHash: {
        _enum: {
          Hash: 'Hash',
          Extrinsic: 'Bytes'
        }
      },
      ExtrinsicStatus: {
        _enum: {
          Future: 'Null',
          Ready: 'Null',
          Broadcast: 'Vec<Text>',
          InBlock: 'Hash',
          Retracted: 'Hash',
          FinalityTimeout: 'Hash',
          Finalized: 'Hash',
          Usurped: 'Hash',
          Dropped: 'Null',
          Invalid: 'Null'
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$5 = {
    rpc: {
      getHeader: {
        alias: ['chain_getHead'],
        description: 'Retrieves the header for a specific block',
        params: [{
          name: 'hash',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Header'
      },
      getBlock: {
        description: 'Get header and body of a relay chain block',
        params: [{
          name: 'hash',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'SignedBlock'
      },
      getBlockHash: {
        description: 'Get the block hash for a specific block',
        params: [{
          name: 'blockNumber',
          type: 'BlockNumber',
          isOptional: true
        }],
        type: 'BlockHash'
      },
      getFinalizedHead: {
        alias: ['chain_getFinalisedHead'],
        description: 'Get hash of the last finalized block in the canon chain',
        params: [],
        type: 'BlockHash'
      },
      subscribeNewHeads: {
        alias: ['chain_unsubscribeNewHeads', 'subscribe_newHead', 'unsubscribe_newHead'],
        description: 'Retrieves the best header via subscription',
        params: [],
        // NOTE These still has the aliassed version, compatible with 1.x
        pubsub: ['newHead', 'subscribeNewHead', 'unsubscribeNewHead'],
        type: 'Header'
      },
      subscribeFinalizedHeads: {
        alias: ['chain_subscribeFinalisedHeads', 'chain_unsubscribeFinalisedHeads'],
        description: 'Retrieves the best finalized header via subscription',
        params: [],
        pubsub: ['finalizedHead', 'subscribeFinalizedHeads', 'unsubscribeFinalizedHeads'],
        type: 'Header'
      },
      subscribeAllHeads: {
        description: 'Retrieves the newest header via subscription',
        params: [],
        pubsub: ['allHead', 'subscribeAllHeads', 'unsubscribeAllHeads'],
        type: 'Header'
      }
    },
    types: {
      BlockHash: 'Hash'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$4 = {
    rpc: {
      getKeys: {
        description: 'Returns the keys with prefix from a child storage, leave empty to get all the keys',
        params: [{
          name: 'childKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'prefix',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageKey>'
      },
      getKeysPaged: {
        alias: ['childstate_getKeysPagedAt'],
        description: 'Returns the keys with prefix from a child storage with pagination support',
        params: [{
          name: 'childKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'prefix',
          type: 'StorageKey'
        }, {
          name: 'count',
          type: 'u32'
        }, {
          name: 'startKey',
          type: 'StorageKey',
          isOptional: true
        }, {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageKey>'
      },
      getStorage: {
        description: 'Returns a child storage entry at a specific block state',
        params: [{
          name: 'childKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Option<StorageData>'
      },
      getStorageHash: {
        description: 'Returns the hash of a child storage entry at a block state',
        params: [{
          name: 'childKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Option<Hash>'
      },
      getStorageSize: {
        description: 'Returns the size of a child storage entry at a block state',
        params: [{
          name: 'childKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'Hash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Option<u64>'
      }
    },
    types: {
      // StorageKey extends Bytes
      PrefixedStorageKey: 'StorageKey'
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$3 = {
    rpc: {
      localStorageSet: {
        description: 'Set offchain local storage under given key and prefix',
        params: [{
          name: 'kind',
          type: 'StorageKind'
        }, {
          name: 'key',
          type: 'Bytes'
        }, {
          name: 'value',
          type: 'Bytes'
        }],
        type: 'Null'
      },
      localStorageGet: {
        description: 'Get offchain local storage under given key and prefix',
        params: [{
          name: 'kind',
          type: 'StorageKind'
        }, {
          name: 'key',
          type: 'Bytes'
        }],
        type: 'Option<Bytes>'
      }
    },
    types: {
      StorageKind: {
        _enum: {
          PERSISTENT: 1,
          LOCAL: 2
        }
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const QUERY_PARAMS = [{
    name: 'extrinsic',
    type: 'Bytes'
  }, {
    name: 'at',
    type: 'BlockHash',
    isHistoric: true,
    isOptional: true
  }];
  const definitions$2 = {
    rpc: {
      queryInfo: {
        description: 'Retrieves the fee information for an encoded extrinsic',
        params: QUERY_PARAMS,
        type: 'RuntimeDispatchInfo'
      },
      queryFeeDetails: {
        description: 'Query the detailed fee of a given encoded extrinsic',
        params: QUERY_PARAMS,
        type: 'FeeDetails'
      }
    },
    types: {
      FeeDetails: {
        inclusionFee: 'Option<InclusionFee>' // skipped in serde
        // tip: 'Balance'

      },
      InclusionFee: {
        baseFee: 'Balance',
        lenFee: 'Balance',
        adjustedWeightFee: 'Balance'
      },
      RuntimeDispatchInfo: {
        weight: 'Weight',
        class: 'DispatchClass',
        partialFee: 'Balance'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // order important in structs... :)

  /* eslint-disable sort-keys */
  const definitions$1 = {
    rpc: {
      call: {
        alias: ['state_callAt'],
        description: 'Perform a call to a builtin on the chain',
        params: [{
          name: 'method',
          type: 'Text'
        }, {
          name: 'data',
          type: 'Bytes'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Bytes'
      },
      getKeys: {
        description: 'Retrieves the keys with a certain prefix',
        params: [{
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageKey>'
      },
      getPairs: {
        description: 'Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)',
        params: [{
          name: 'prefix',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<KeyValue>'
      },
      getKeysPaged: {
        alias: ['state_getKeysPagedAt'],
        description: 'Returns the keys with prefix with pagination support.',
        params: [{
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'count',
          type: 'u32'
        }, {
          name: 'startKey',
          type: 'StorageKey',
          isOptional: true
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageKey>'
      },
      getStorage: {
        alias: ['state_getStorageAt'],
        description: 'Retrieves the storage for a key',
        params: [{
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'StorageData'
      },
      getStorageHash: {
        alias: ['state_getStorageHashAt'],
        description: 'Retrieves the storage hash',
        params: [{
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Hash'
      },
      getStorageSize: {
        alias: ['state_getStorageSizeAt'],
        description: 'Retrieves the storage size',
        params: [{
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'u64'
      },
      getChildKeys: {
        description: 'Retrieves the keys with prefix of a specific child storage',
        params: [{
          name: 'childStorageKey',
          type: 'StorageKey'
        }, {
          name: 'childDefinition',
          type: 'StorageKey'
        }, {
          name: 'childType',
          type: 'u32'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageKey>'
      },
      getChildStorage: {
        description: 'Retrieves the child storage for a key',
        params: [{
          name: 'childStorageKey',
          type: 'StorageKey'
        }, {
          name: 'childDefinition',
          type: 'StorageKey'
        }, {
          name: 'childType',
          type: 'u32'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'StorageData'
      },
      getChildStorageHash: {
        description: 'Retrieves the child storage hash',
        params: [{
          name: 'childStorageKey',
          type: 'StorageKey'
        }, {
          name: 'childDefinition',
          type: 'StorageKey'
        }, {
          name: 'childType',
          type: 'u32'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Hash'
      },
      getChildStorageSize: {
        description: 'Retrieves the child storage size',
        params: [{
          name: 'childStorageKey',
          type: 'StorageKey'
        }, {
          name: 'childDefinition',
          type: 'StorageKey'
        }, {
          name: 'childType',
          type: 'u32'
        }, {
          name: 'key',
          type: 'StorageKey'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'u64'
      },
      getMetadata: {
        description: 'Returns the runtime metadata',
        params: [{
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Metadata'
      },
      getRuntimeVersion: {
        alias: ['chain_getRuntimeVersion'],
        description: 'Get the runtime version',
        params: [{
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'RuntimeVersion'
      },
      queryStorage: {
        description: 'Query historical storage entries (by key) starting from a start block',
        params: [{
          name: 'keys',
          type: 'Vec<StorageKey>'
        }, {
          name: 'fromBlock',
          type: 'Hash'
        }, {
          name: 'toBlock',
          type: 'BlockHash',
          isOptional: true
        }],
        type: 'Vec<StorageChangeSet>'
      },
      queryStorageAt: {
        description: 'Query storage entries (by key) starting at block hash given as the second parameter',
        params: [{
          name: 'keys',
          type: 'Vec<StorageKey>'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'Vec<StorageChangeSet>'
      },
      getChildReadProof: {
        description: 'Returns proof of storage for child key entries at a specific block state.',
        params: [{
          name: 'childStorageKey',
          type: 'PrefixedStorageKey'
        }, {
          name: 'keys',
          type: 'Vec<StorageKey>'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'ReadProof'
      },
      getReadProof: {
        description: 'Returns proof of storage entries at a specific block state',
        params: [{
          name: 'keys',
          type: 'Vec<StorageKey>'
        }, {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
        type: 'ReadProof'
      },
      subscribeRuntimeVersion: {
        alias: ['chain_subscribeRuntimeVersion', 'chain_unsubscribeRuntimeVersion'],
        description: 'Retrieves the runtime version via subscription',
        params: [],
        pubsub: ['runtimeVersion', 'subscribeRuntimeVersion', 'unsubscribeRuntimeVersion'],
        type: 'RuntimeVersion'
      },
      subscribeStorage: {
        description: 'Subscribes to storage changes for the provided keys',
        params: [{
          name: 'keys',
          type: 'Vec<StorageKey>',
          isOptional: true
        }],
        pubsub: ['storage', 'subscribeStorage', 'unsubscribeStorage'],
        type: 'StorageChangeSet'
      },
      traceBlock: {
        description: 'Provides a way to trace the re-execution of a single block',
        params: [{
          name: 'block',
          type: 'Hash'
        }, {
          name: 'targets',
          type: 'Option<Text>'
        }, {
          name: 'storageKeys',
          type: 'Option<Text>'
        }],
        type: 'TraceBlockResponse'
      }
    },
    types: {
      ApiId: '[u8; 8]',
      BlockTrace: {
        blockHash: 'Text',
        parentHash: 'Text',
        tracingTargets: 'Text',
        storageKeys: 'Text',
        spans: 'Vec<BlockTraceSpan>',
        events: 'Vec<BlockTraceEvent>'
      },
      BlockTraceEvent: {
        target: 'Text',
        data: 'BlockTraceEventData',
        parentId: 'Option<u64>'
      },
      BlockTraceEventData: {
        stringValues: 'HashMap<Text, Text>'
      },
      BlockTraceSpan: {
        id: 'u64',
        parentId: 'Option<u64>',
        name: 'Text',
        target: 'Text',
        wasm: 'bool'
      },
      KeyValueOption: '(StorageKey, Option<StorageData>)',
      ReadProof: {
        at: 'Hash',
        proof: 'Vec<Bytes>'
      },
      RuntimeVersionApi: '(ApiId, u32)',
      RuntimeVersion: {
        specName: 'Text',
        implName: 'Text',
        authoringVersion: 'u32',
        specVersion: 'u32',
        implVersion: 'u32',
        apis: 'Vec<RuntimeVersionApi>',
        transactionVersion: 'u32'
      },
      RuntimeVersionPartial: {
        specName: 'Text',
        specVersion: 'u32'
      },
      StorageChangeSet: {
        block: 'Hash',
        changes: 'Vec<KeyValueOption>'
      },
      TraceBlockResponse: {
        _enum: {
          TraceError: 'TraceError',
          BlockTrace: 'BlockTrace'
        }
      },
      TraceError: {
        error: 'Text'
      }
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const definitions = /*#__PURE__*/Object.freeze({
    __proto__: null,
    runtime: definitions$V,
    assets: definitions$U,
    authorship: definitions$T,
    aura: definitions$S,
    babe: definitions$R,
    balances: definitions$Q,
    beefy: definitions$P,
    collective: definitions$O,
    consensus: definitions$N,
    contracts: definitions$M,
    democracy: definitions$L,
    elections: definitions$K,
    engine: definitions$J,
    evm: definitions$I,
    extrinsics: definitions$H,
    genericAsset: definitions$G,
    gilt: definitions$F,
    grandpa: definitions$E,
    identity: definitions$D,
    imOnline: definitions$C,
    lottery: definitions$B,
    mmr: definitions$A,
    offences: definitions$z,
    proxy: definitions$y,
    recovery: definitions$x,
    scheduler: definitions$w,
    session: definitions$v,
    society: definitions$u,
    staking: definitions$t,
    support: definitions$s,
    syncstate: definitions$r,
    system: definitions$q,
    treasury: definitions$p,
    txpayment: definitions$o,
    uniques: definitions$n,
    utility: definitions$m,
    vesting: definitions$l,
    attestations: definitions$k,
    bridges: definitions$j,
    claims: definitions$i,
    crowdloan: definitions$h,
    cumulus: definitions$g,
    parachains: definitions$f,
    poll: definitions$e,
    purchase: definitions$d,
    xcm: definitions$c,
    contractsAbi: definitions$b,
    scaleInfo: definitions$a,
    eth: definitions$9,
    metadata: definitions$8,
    rpc: definitions$7,
    author: definitions$6,
    chain: definitions$5,
    childstate: definitions$4,
    offchain: definitions$3,
    payment: definitions$2,
    state: definitions$1
  });

  function ownKeys$j(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$j(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$j(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$j(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const jsonrpc = {};
  Object.keys(definitions).filter(key => Object.keys(definitions[key].rpc || {}).length !== 0).forEach(_section => {
    jsonrpc[_section] = {};
    Object.entries(definitions[_section].rpc).forEach(([method, def]) => {
      const isSubscription = !!def.pubsub;
      const section = def.aliasSection || _section; // allow for section overrides

      if (!jsonrpc[section]) {
        jsonrpc[section] = {};
      }

      jsonrpc[section][method] = _objectSpread$j(_objectSpread$j({}, def), {}, {
        isSubscription,
        jsonrpc: `${section}_${method}`,
        method,
        section
      });
    });
  });
  const jsonrpc$1 = jsonrpc;

  function _classPrivateFieldBase(receiver, privateKey) {
    if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
      throw new TypeError("attempted to use private field on non-instance");
    }

    return receiver;
  }

  var id = 0;
  function _classPrivateFieldKey(name) {
    return "__private_" + id++ + "_" + name;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  function hasEq(o) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return util.isFunction(o.eq);
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // when the second is an Codec[] that the first has to be as well

  function compareArray(a, b) {
    if (Array.isArray(b)) {
      return a.length === b.length && util.isUndefined(a.find((value, index) => hasEq(value) ? !value.eq(b[index]) : value !== b[index]));
    }

    return false;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name AbstractArray
   * @description
   * This manages codec arrays. It is an extension to Array, providing
   * specific encoding/decoding on top of the base type.
   * @noInheritDoc
   */

  class AbstractArray extends Array {
    constructor(registry, values) {
      super(values.length);
      this.registry = void 0;
      this.createdAtHash = void 0;

      for (let i = 0; i < values.length; i++) {
        this[i] = values[i];
      }

      this.registry = registry;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.reduce((total, entry) => total + entry.encodedLength, util.compactToU8a(this.length).length);
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return this.length === 0;
    }
    /**
     * @description The length of the value
     */


    get length() {
      // only included here since we ignore inherited docs
      return super.length;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return compareArray(this, other);
    }
    /**
     * @description Converts the Object to an standard JavaScript Array
     */


    toArray() {
      return Array.from(this);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return this.map(entry => entry.toHuman(isExtended));
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.map(entry => entry.toJSON());
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    /**
     * @description Returns the string representation of the value
     */
    toString() {
      // Overwrite the default toString representation of Array.
      const data = this.map(entry => entry.toString());
      return `[${data.join(', ')}]`;
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const encoded = this.map(entry => entry.toU8a(isBare));
      return isBare ? util.u8aConcat(...encoded) : util.u8aConcat(util.compactToU8a(this.length), ...encoded);
    } // Below are methods that we override. When we do a `new Vec(...).map()`,
    // we want it to return an Array. We only override the methods that return a
    // new instance.

    /**
     * @description Concatenates two arrays
     */


    concat(other) {
      return this.toArray().concat(other instanceof AbstractArray ? other.toArray() : other);
    }
    /**
     * @description Filters the array with the callback
     */


    filter(callbackfn, thisArg) {
      return this.toArray().filter(callbackfn, thisArg);
    }
    /**
     * @description Maps the array with the callback
     */


    map(callbackfn, thisArg) {
      return this.toArray().map(callbackfn, thisArg);
    }
    /**
     * @description Checks if the array includes a specific value
     */


    includes(check) {
      return this.some(value => value.eq(check));
    }
    /**
     * @description Returns a slice of an array
     */


    slice(start, end) {
      return this.toArray().slice(start, end);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name Null
   * @description
   * Implements a type that does not contain anything (apart from `null`)
   */

  class Null {
    constructor(registry) {
      this.registry = void 0;
      this.createdAtHash = void 0;
      this.registry = registry;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return 0;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      throw new Error('.hash is not implemented on Null');
    }
    /**
     * @description Checks if the value is an empty value (always true)
     */


    get isEmpty() {
      return true;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return other instanceof Null || util.isNull(other);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return '0x';
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return null;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Null';
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return '';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return new Uint8Array();
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function hasMismatch(a, b) {
    return util.isUndefined(a) || (hasEq(a) ? !a.eq(b) : a !== b);
  }

  function notEntry(value) {
    return !Array.isArray(value) || value.length !== 2;
  }

  function compareMapArray(a, b) {
    // equal number of entries and each entry in the array should match
    return a.size === b.length && !b.some(entry => notEntry(entry) || hasMismatch(a.get(entry[0]), entry[1]));
  } // NOTE These are used internally and when comparing objects, expects that
  // when the second is an Map<string, Codec> that the first has to be as well


  function compareMap(a, b) {
    if (Array.isArray(b)) {
      return compareMapArray(a, b);
    } else if (b instanceof Map) {
      return compareMapArray(a, [...b.entries()]);
    } else if (util.isObject(b)) {
      return compareMapArray(a, Object.entries(b));
    }

    return false;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function compareSetArray(a, b) {
    // equal number of entries and each entry in the array should match
    return a.size === b.length && !b.some(entry => !a.has(entry));
  } // NOTE These are used internally and when comparing objects, expects that
  // when the second is an Set<string, Codec> that the first has to be as well


  function compareSet(a, b) {
    if (Array.isArray(b)) {
      return compareSetArray(a, b);
    } else if (b instanceof Set) {
      return compareSetArray(a, [...b.values()]);
    } else if (util.isObject(b)) {
      return compareSetArray(a, Object.values(b));
    }

    return false;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * Given an u8a, and an array of Type constructors, decode the u8a against the
   * types, and return an array of decoded values.
   *
   * @param u8a - The u8a to decode.
   * @param result - The result array (will be returned with values pushed)
   * @param types - The array of Constructor to decode the U8a against.
   */

  function decodeU8a$3(registry, u8a, _types, _keys) {
    const result = [];
    const [types, keys] = Array.isArray(_types) ? [_types, _keys || []] : [Object.values(_types), Object.keys(_types)];
    let offset = 0;

    for (let i = 0; i < types.length; i++) {
      const Type = types[i];

      try {
        const value = new Type(registry, u8a.subarray(offset));
        result.push(value);
        offset += value.encodedLength;
      } catch (error) {
        let rawType;

        try {
          rawType = new Type(registry).toRawType();
        } catch {
          rawType = '';
        }

        throw new Error(`decodeU8a: failed at ${util.u8aToHex(u8a.subarray(offset).slice(0, 8))}… on ${keys[i] ? `${keys[i]}` : ''}${rawType ? `: ${rawType}` : ''}:: ${error.message}`);
      }
    }

    return result;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  function typeToConstructor(registry, type) {
    return util.isString(type) ? registry.createClass(type) : type;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @description takes an input map of the form `{ [string]: string | Constructor }` and returns a map of `{ [string]: Constructor }`
   */

  function mapToTypeMap(registry, input) {
    return Object.entries(input).reduce((output, [key, type]) => {
      output[key] = typeToConstructor(registry, type);
      return output;
    }, {});
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  /** @internal **/
  function isArrayLike(arg) {
    return arg instanceof Uint8Array || Array.isArray(arg);
  }
  /** @internal **/


  function isCodec(arg) {
    return util.isFunction(arg && arg.toU8a);
  }
  /** @internal **/


  function isEnum(arg) {
    return isCodec(arg) && util.isNumber(arg.index) && isCodec(arg.value);
  }
  /** @internal */


  function isNumberLike(arg) {
    return util.isNumber(arg) || util.isBn(arg) || util.isBigInt(arg);
  }
  /** @internal */


  function sortArray(a, b) {
    // Vec, Tuple, Bytes etc.
    let sortRes = 0;
    const minLen = Math.min(a.length, b.length);

    for (let i = 0; i < minLen; ++i) {
      sortRes = sortAsc(a[i], b[i]);

      if (sortRes !== 0) {
        return sortRes;
      }
    }

    return a.length - b.length;
  }
  /**
  * Sort keys/values of BTreeSet/BTreeMap in ascending order for encoding compatibility with Rust's BTreeSet/BTreeMap
  * (https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html)
  * (https://doc.rust-lang.org/stable/std/collections/struct.BTreeMap.html)
  */


  function sortAsc(a, b) {
    if (isNumberLike(a) && isNumberLike(b)) {
      return util.bnToBn(a).cmp(util.bnToBn(b));
    } else if (a instanceof Map && b instanceof Map) {
      return sortAsc(Array.from(a.values()), Array.from(b.values()));
    } else if (isEnum(a) && isEnum(b)) {
      return sortAsc(a.index, b.index) || sortAsc(a.value, b.value);
    } else if (isArrayLike(a) && isArrayLike(b)) {
      return sortArray(a, b);
    } else if (isCodec(a) && isCodec(b)) {
      // Text, Bool etc.
      return sortAsc(a.toU8a(true), b.toU8a(true));
    }

    throw new Error(`Attempting to sort unrecognized values: ${util.stringify(a)} (typeof ${typeof a}) <-> ${util.stringify(b)} (typeof ${typeof b})`);
  }
  function sortSet(set) {
    return new Set(Array.from(set).sort(sortAsc));
  }
  function sortMap(map) {
    return new Map(Array.from(map.entries()).sort(([keyA], [keyB]) => sortAsc(keyA, keyB)));
  }

  /** @internal */
  function decodeStructFromObject(registry, Types, value, jsonMap) {
    let jsonObj;
    const inputKeys = Object.keys(Types);
    util.assert(!Array.isArray(value) || value.length === inputKeys.length, () => `Struct: Unable to map ${util.stringify(value)} array to object with known keys ${inputKeys.join(', ')}`);
    return inputKeys.reduce((raw, key, index) => {
      // The key in the JSON can be snake_case (or other cases), but in our
      // Types, result or any other maps, it's camelCase
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const jsonKey = jsonMap.get(key) && !value[key] ? jsonMap.get(key) : key;
      const Type = Types[key];

      try {
        if (Array.isArray(value)) {
          // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          raw[key] = value[index] instanceof Type ? value[index] : new Type(registry, value[index]);
        } else if (value instanceof Map) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const mapped = value.get(jsonKey); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

          raw[key] = mapped instanceof Type ? mapped : new Type(registry, mapped);
        } else if (util.isObject(value)) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          let assign = value[jsonKey];

          if (util.isUndefined(assign)) {
            if (util.isUndefined(jsonObj)) {
              jsonObj = Object.entries(value).reduce((all, [key, value]) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                all[util.stringCamelCase(key)] = value;
                return all;
              }, {});
            } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


            assign = jsonObj[jsonKey];
          } // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access


          raw[key] = assign instanceof Type ? assign : new Type(registry, assign);
        } else {
          throw new Error(`Cannot decode value ${util.stringify(value)} (typeof ${typeof value}), expected an input object with known keys`);
        }
      } catch (error) {
        let type = Type.name;

        try {
          type = new Type(registry).toRawType();
        } catch (error) {// ignore
        }

        throw new Error(`Struct: failed on ${jsonKey}: ${type}:: ${error.message}`);
      }

      return raw;
    }, {});
  }
  /**
   * Decode input to pass into constructor.
   *
   * @param Types - Types definition.
   * @param value - Value to decode, one of:
   * - null
   * - undefined
   * - hex
   * - Uint8Array
   * - object with `{ key1: value1, key2: value2 }`, assuming `key1` and `key2`
   * are also keys in `Types`
   * - array with `[value1, value2]` assuming the array has the same length as
   * `Object.keys(Types)`
   * @param jsonMap
   * @internal
   */


  function decodeStruct(registry, Types, value, jsonMap) {
    if (util.isHex(value)) {
      return decodeStruct(registry, Types, util.hexToU8a(value), jsonMap);
    } else if (util.isU8a(value)) {
      const keys = Object.keys(Types);
      const values = decodeU8a$3(registry, value, Object.values(Types), keys); // Transform array of values to {key: value} mapping

      return keys.reduce((raw, key, index) => {
        // TS2322: Type 'Codec' is not assignable to type 'T[keyof S]'.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        raw[key] = values[index];
        return raw;
      }, {});
    } else if (!value) {
      return {};
    } // We assume from here that value is a JS object (Array, Map, Object)


    return decodeStructFromObject(registry, Types, value, jsonMap);
  }
  /**
   * @name Struct
   * @description
   * A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
   * a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
   * values in the constructor and it manages the decoding. It is important that the constructor
   * values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
   * it needs to decoded in the specific defined order.
   * @noInheritDoc
   */


  var _jsonMap = /*#__PURE__*/_classPrivateFieldKey("jsonMap");

  var _Types = /*#__PURE__*/_classPrivateFieldKey("Types");

  class Struct extends Map {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    constructor(registry, Types, value = {}, jsonMap = new Map()) {
      super(Object.entries(decodeStruct(registry, mapToTypeMap(registry, Types), value, jsonMap)));
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _jsonMap, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _Types, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _jsonMap)[_jsonMap] = jsonMap;
      _classPrivateFieldBase(this, _Types)[_Types] = mapToTypeMap(registry, Types);
    }

    static with(Types, jsonMap) {
      return class extends Struct {
        constructor(registry, value) {
          super(registry, Types, value, jsonMap);
          Object.keys(Types).forEach(key => {
            util.isUndefined(this[key]) && Object.defineProperty(this, key, {
              enumerable: true,
              get: () => this.get(key)
            });
          });
        }

      };
    }

    static typesToMap(registry, Types) {
      return Object.entries(Types).reduce((result, [key, Type]) => {
        result[key] = registry.getClassName(Type) || new Type(registry).toRawType();
        return result;
      }, {});
    }
    /**
     * @description The available keys for this struct
     */


    get defKeys() {
      return Object.keys(_classPrivateFieldBase(this, _Types)[_Types]);
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      const items = this.toArray();

      for (let i = 0; i < items.length; i++) {
        if (!items[i].isEmpty) {
          return false;
        }
      }

      return true;
    }
    /**
     * @description Returns the Type description to sthe structure
     */


    get Type() {
      return Object.entries(_classPrivateFieldBase(this, _Types)[_Types]).reduce((result, [key, Type]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        result[key] = new Type(this.registry).toRawType();
        return result;
      }, {});
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toArray().reduce((length, entry) => {
        length += entry.encodedLength;
        return length;
      }, 0);
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return compareMap(this, other);
    }
    /**
     * @description Returns a specific names entry in the structure
     * @param name The name of the entry to retrieve
     */


    get(name) {
      return super.get(name);
    }
    /**
     * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
     */


    getAtIndex(index) {
      return this.toArray()[index];
    }
    /**
     * @description Converts the Object to an standard JavaScript Array
     */


    toArray() {
      return [...this.values()];
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return [...this.keys()].reduce((json, key) => {
        const value = this.get(key);
        json[key] = value && value.toHuman(isExtended);
        return json;
      }, {});
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return [...this.keys()].reduce((json, key) => {
        const jsonKey = _classPrivateFieldBase(this, _jsonMap)[_jsonMap].get(key) || key;
        const value = this.get(key);
        json[jsonKey] = value && value.toJSON();
        return json;
      }, {});
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return util.stringify(Struct.typesToMap(this.registry, _classPrivateFieldBase(this, _Types)[_Types]));
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return util.stringify(this.toJSON());
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      // we have keyof S here, cast to string to make it compatible with isBare
      const entries = [...this.entries()];
      return util.u8aConcat(...entries // eslint-disable-next-line @typescript-eslint/unbound-method
      .filter(([, value]) => util.isFunction(value === null || value === void 0 ? void 0 : value.toU8a)).map(([key, value]) => value.toU8a(!isBare || util.isBoolean(isBare) ? isBare : isBare[key])));
    }

  }

  function isRustEnum$1(def) {
    const defValues = Object.values(def);

    if (defValues.some(v => util.isNumber(v))) {
      util.assert(defValues.every(v => util.isNumber(v) && v >= 0 && v <= 255), 'Invalid number-indexed enum definition');
      return false;
    }

    return true;
  }

  function extractDef(registry, _def) {
    if (Array.isArray(_def)) {
      return {
        def: _def.reduce((def, key, index) => {
          def[key] = {
            Type: Null,
            index
          };
          return def;
        }, {}),
        isBasic: true,
        isIndexed: false
      };
    }

    let isBasic;
    let isIndexed;
    let def;

    if (isRustEnum$1(_def)) {
      def = Object.entries(mapToTypeMap(registry, _def)).reduce((def, [key, Type], index) => {
        def[key] = {
          Type,
          index
        };
        return def;
      }, {});
      isBasic = !Object.values(def).some(({
        Type
      }) => Type !== Null);
      isIndexed = false;
    } else {
      def = Object.entries(_def).reduce((def, [key, index]) => {
        def[key] = {
          Type: Null,
          index
        };
        return def;
      }, {});
      isBasic = true;
      isIndexed = true;
    }

    return {
      def,
      isBasic,
      isIndexed
    };
  }

  function createFromValue(registry, def, index = 0, value) {
    const entry = Object.values(def).find(e => e.index === index);
    util.assert(!util.isUndefined(entry), () => `Unable to create Enum via index ${index}, in ${Object.keys(def).join(', ')}`);
    return {
      index,
      value: value instanceof entry.Type ? value : new entry.Type(registry, value)
    };
  }

  function decodeFromJSON(registry, def, key, value) {
    // JSON comes in the form of { "<type (camelCase)>": "<value for type>" }, here we
    // additionally force to lower to ensure forward compat
    const keys = Object.keys(def).map(k => k.toLowerCase());
    const keyLower = key.toLowerCase();
    const index = keys.indexOf(keyLower);
    util.assert(index !== -1, () => `Cannot map Enum JSON, unable to find '${key}' in ${keys.join(', ')}`);

    try {
      return createFromValue(registry, def, Object.values(def)[index].index, value);
    } catch (error) {
      throw new Error(`Enum(${key}):: ${error.message}`);
    }
  }

  function decodeFromString(registry, def, value) {
    return util.isHex(value) // eslint-disable-next-line @typescript-eslint/no-use-before-define
    ? decodeFromValue(registry, def, util.hexToU8a(value)) : decodeFromJSON(registry, def, value);
  }

  function decodeFromValue(registry, def, value) {
    if (util.isU8a(value)) {
      // nested, we don't want to match isObject below
      if (value.length) {
        return createFromValue(registry, def, value[0], value.subarray(1));
      }
    } else if (util.isNumber(value)) {
      return createFromValue(registry, def, value);
    } else if (util.isString(value)) {
      return decodeFromString(registry, def, value.toString());
    } else if (util.isObject(value)) {
      const key = Object.keys(value)[0];
      return decodeFromJSON(registry, def, key, value[key]);
    } // Worst-case scenario, return the first with default


    return createFromValue(registry, def, Object.values(def)[0].index);
  }

  function decodeEnum(registry, def, value, index) {
    // NOTE We check the index path first, before looking at values - this allows treating
    // the optional indexes before anything else, more-specific > less-specific
    if (util.isNumber(index)) {
      return createFromValue(registry, def, index, value); // eslint-disable-next-line @typescript-eslint/no-use-before-define
    } else if (value instanceof Enum) {
      return createFromValue(registry, def, value.index, value.value);
    }

    return decodeFromValue(registry, def, value);
  }
  /**
   * @name Enum
   * @description
   * This implements an enum, that based on the value wraps a different type. It is effectively
   * an extension to enum where the value type is determined by the actual index.
   */


  var _def2 = /*#__PURE__*/_classPrivateFieldKey("def");

  var _entryIndex = /*#__PURE__*/_classPrivateFieldKey("entryIndex");

  var _indexes = /*#__PURE__*/_classPrivateFieldKey("indexes");

  var _isBasic = /*#__PURE__*/_classPrivateFieldKey("isBasic");

  var _isIndexed = /*#__PURE__*/_classPrivateFieldKey("isIndexed");

  var _raw$2 = /*#__PURE__*/_classPrivateFieldKey("raw");

  class Enum {
    constructor(registry, def, value, index) {
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _def2, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _entryIndex, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _indexes, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _isBasic, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _isIndexed, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _raw$2, {
        writable: true,
        value: void 0
      });
      const defInfo = extractDef(registry, def);
      const decoded = decodeEnum(registry, defInfo.def, value, index);
      this.registry = registry;
      _classPrivateFieldBase(this, _def2)[_def2] = defInfo.def;
      _classPrivateFieldBase(this, _isBasic)[_isBasic] = defInfo.isBasic;
      _classPrivateFieldBase(this, _isIndexed)[_isIndexed] = defInfo.isIndexed;
      _classPrivateFieldBase(this, _indexes)[_indexes] = Object.values(defInfo.def).map(({
        index
      }) => index);
      _classPrivateFieldBase(this, _entryIndex)[_entryIndex] = _classPrivateFieldBase(this, _indexes)[_indexes].indexOf(decoded.index) || 0;
      _classPrivateFieldBase(this, _raw$2)[_raw$2] = decoded.value;
    }

    static with(Types) {
      return class extends Enum {
        constructor(registry, value, index) {
          super(registry, Types, value, index);
          Object.keys(_classPrivateFieldBase(this, _def2)[_def2]).forEach(_key => {
            const name = util.stringUpperFirst(util.stringCamelCase(_key.replace(' ', '_')));
            const askey = `as${name}`;
            const iskey = `is${name}`;
            util.isUndefined(this[iskey]) && Object.defineProperty(this, iskey, {
              enumerable: true,
              get: () => this.type === _key
            });
            util.isUndefined(this[askey]) && Object.defineProperty(this, askey, {
              enumerable: true,
              get: () => {
                util.assert(this[iskey], () => `Cannot convert '${this.type}' via ${askey}`);
                return this.value;
              }
            });
          });
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return 1 + _classPrivateFieldBase(this, _raw$2)[_raw$2].encodedLength;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description The index of the enum value
     */


    get index() {
      return _classPrivateFieldBase(this, _indexes)[_indexes][_classPrivateFieldBase(this, _entryIndex)[_entryIndex]];
    }
    /**
     * @description true if this is a basic enum (no values)
     */


    get isBasic() {
      return _classPrivateFieldBase(this, _isBasic)[_isBasic];
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return _classPrivateFieldBase(this, _raw$2)[_raw$2].isEmpty;
    }
    /**
     * @description Checks if the Enum points to a [[Null]] type
     */


    get isNone() {
      return _classPrivateFieldBase(this, _raw$2)[_raw$2] instanceof Null;
    }
    /**
     * @description Checks if the Enum points to a [[Null]] type
     * @deprecated use isNone
     */


    get isNull() {
      return this.isNone;
    }
    /**
     * @description The available keys for this enum
     */


    get defIndexes() {
      return _classPrivateFieldBase(this, _indexes)[_indexes];
    }
    /**
     * @description The available keys for this enum
     */


    get defKeys() {
      return Object.keys(_classPrivateFieldBase(this, _def2)[_def2]);
    }
    /**
     * @description The name of the type this enum value represents
     */


    get type() {
      return this.defKeys[_classPrivateFieldBase(this, _entryIndex)[_entryIndex]];
    }
    /**
     * @description The value of the enum
     */


    get value() {
      return _classPrivateFieldBase(this, _raw$2)[_raw$2];
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      // cater for the case where we only pass the enum index
      if (util.isNumber(other)) {
        return this.toNumber() === other;
      } else if (_classPrivateFieldBase(this, _isBasic)[_isBasic] && util.isString(other)) {
        return this.type === other;
      } else if (util.isU8a(other)) {
        return !this.toU8a().some((entry, index) => entry !== other[index]);
      } else if (util.isHex(other)) {
        return this.toHex() === other;
      } else if (other instanceof Enum) {
        return this.index === other.index && this.value.eq(other.value);
      } else if (util.isObject(other)) {
        return this.value.eq(other[this.type]);
      } // compare the actual wrapper value


      return this.value.eq(other);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return _classPrivateFieldBase(this, _isBasic)[_isBasic] || this.isNone ? this.type : {
        [this.type]: _classPrivateFieldBase(this, _raw$2)[_raw$2].toHuman(isExtended)
      };
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return _classPrivateFieldBase(this, _isBasic)[_isBasic] ? this.type : {
        [util.stringCamelCase(this.type)]: _classPrivateFieldBase(this, _raw$2)[_raw$2].toJSON()
      };
    }
    /**
     * @description Returns the number representation for the value
     */


    toNumber() {
      return this.index;
    }
    /**
     * @description Returns a raw struct representation of the enum types
     */


    _toRawStruct() {
      if (_classPrivateFieldBase(this, _isBasic)[_isBasic]) {
        return _classPrivateFieldBase(this, _isIndexed)[_isIndexed] ? this.defKeys.reduce((out, key, index) => {
          out[key] = _classPrivateFieldBase(this, _indexes)[_indexes][index];
          return out;
        }, {}) : this.defKeys;
      }

      const typeMap = Object.entries(_classPrivateFieldBase(this, _def2)[_def2]).reduce((out, [key, {
        Type
      }]) => {
        out[key] = Type;
        return out;
      }, {});
      return Struct.typesToMap(this.registry, typeMap);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return util.stringify({
        _enum: this._toRawStruct()
      });
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this.isNull ? this.type : util.stringify(this.toJSON());
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return util.u8aConcat(new Uint8Array(isBare ? [] : [this.index]), _classPrivateFieldBase(this, _raw$2)[_raw$2].toU8a(isBare));
    }

  }

  const l$4 = util.logger('Map');
  /** @internal */

  function decodeMapFromU8a(registry, KeyClass, ValClass, u8a) {
    const output = new Map();
    const [offset, length] = util.compactFromU8a(u8a);
    const types = [];

    for (let i = 0; i < length.toNumber(); i++) {
      types.push(KeyClass, ValClass);
    }

    const values = decodeU8a$3(registry, u8a.subarray(offset), types);

    for (let i = 0; i < values.length; i += 2) {
      output.set(values[i], values[i + 1]);
    }

    return output;
  }
  /** @internal */


  function decodeMapFromMap(registry, KeyClass, ValClass, value) {
    const output = new Map();
    value.forEach((val, key) => {
      const isComplex = KeyClass.prototype instanceof AbstractArray || KeyClass.prototype instanceof Struct || KeyClass.prototype instanceof Enum;

      try {
        output.set(key instanceof KeyClass ? key : new KeyClass(registry, isComplex ? JSON.parse(key) : key), val instanceof ValClass ? val : new ValClass(registry, val));
      } catch (error) {
        l$4.error('Failed to decode key or value:', error.message);
        throw error;
      }
    });
    return output;
  }
  /**
   * Decode input to pass into constructor.
   *
   * @param KeyClass - Type of the map key
   * @param ValClass - Type of the map value
   * @param value - Value to decode, one of:
   * - null
   * - undefined
   * - hex
   * - Uint8Array
   * - Map<any, any>, where both key and value types are either
   *   constructors or decodeable values for their types.
   * @param jsonMap
   * @internal
   */


  function decodeMap(registry, keyType, valType, value) {
    const KeyClass = typeToConstructor(registry, keyType);
    const ValClass = typeToConstructor(registry, valType);

    if (!value) {
      return new Map();
    } else if (util.isU8a(value) || util.isHex(value)) {
      return decodeMapFromU8a(registry, KeyClass, ValClass, util.u8aToU8a(value));
    } else if (value instanceof Map) {
      return decodeMapFromMap(registry, KeyClass, ValClass, value);
    } else if (util.isObject(value)) {
      return decodeMapFromMap(registry, KeyClass, ValClass, new Map(Object.entries(value)));
    }

    throw new Error('Map: cannot decode type');
  }

  var _KeyClass = /*#__PURE__*/_classPrivateFieldKey("KeyClass");

  var _ValClass$1 = /*#__PURE__*/_classPrivateFieldKey("ValClass");

  var _type = /*#__PURE__*/_classPrivateFieldKey("type");

  class CodecMap extends Map {
    constructor(registry, keyType, valType, rawValue, type = 'HashMap') {
      const decoded = decodeMap(registry, keyType, valType, rawValue);
      super(type === 'BTreeMap' ? sortMap(decoded) : decoded);
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _KeyClass, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _ValClass$1, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _type, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _KeyClass)[_KeyClass] = typeToConstructor(registry, keyType);
      _classPrivateFieldBase(this, _ValClass$1)[_ValClass$1] = typeToConstructor(registry, valType);
      _classPrivateFieldBase(this, _type)[_type] = type;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      let len = util.compactToU8a(this.size).length;
      this.forEach((v, k) => {
        len += v.encodedLength + k.encodedLength;
      });
      return len;
    }
    /**
     * @description Returns a hash of the value
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return this.size === 0;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return compareMap(this, other);
    }
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      const json = {};
      this.forEach((v, k) => {
        json[k.toString()] = v.toHuman(isExtended);
      });
      return json;
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      const json = {};
      this.forEach((v, k) => {
        json[k.toString()] = v.toJSON();
      });
      return json;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `${_classPrivateFieldBase(this, _type)[_type]}<${this.registry.getClassName(_classPrivateFieldBase(this, _KeyClass)[_KeyClass]) || new (_classPrivateFieldBase(this, _KeyClass)[_KeyClass])(this.registry).toRawType()},${this.registry.getClassName(_classPrivateFieldBase(this, _ValClass$1)[_ValClass$1]) || new (_classPrivateFieldBase(this, _ValClass$1)[_ValClass$1])(this.registry).toRawType()}>`;
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return util.stringify(this.toJSON());
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const encoded = new Array();

      if (!isBare) {
        encoded.push(util.compactToU8a(this.size));
      }

      this.forEach((v, k) => {
        encoded.push(k.toU8a(isBare), v.toU8a(isBare));
      });
      return util.u8aConcat(...encoded);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  class BTreeMap extends CodecMap {
    static with(keyType, valType) {
      return class extends BTreeMap {
        constructor(registry, value) {
          super(registry, keyType, valType, value, 'BTreeMap');
        }

      };
    }

  }

  const l$3 = util.logger('BTreeSet');
  /** @internal */

  function decodeSetFromU8a(registry, ValClass, u8a) {
    const output = new Set();
    const [offset, length] = util.compactFromU8a(u8a);
    const types = [];

    for (let i = 0; i < length.toNumber(); i++) {
      types.push(ValClass);
    }

    const values = decodeU8a$3(registry, u8a.subarray(offset), types);

    for (let i = 0; i < values.length; i++) {
      output.add(values[i]);
    }

    return output;
  }
  /** @internal */


  function decodeSetFromSet(registry, ValClass, value) {
    const output = new Set();
    value.forEach(val => {
      try {
        output.add(val instanceof ValClass ? val : new ValClass(registry, val));
      } catch (error) {
        l$3.error('Failed to decode key or value:', error.message);
        throw error;
      }
    });
    return output;
  }
  /**
   * Decode input to pass into constructor.
   *
   * @param ValClass - Type of the map value
   * @param value - Value to decode, one of:
   * - null
   * - undefined
   * - hex
   * - Uint8Array
   * - Set<any>, where both key and value types are either
   *   constructors or decodeable values for their types.
   * @param jsonSet
   * @internal
   */


  function decodeSet$1(registry, valType, value) {
    if (!value) {
      return new Set();
    }

    const ValClass = typeToConstructor(registry, valType);

    if (util.isHex(value) || util.isU8a(value)) {
      return decodeSetFromU8a(registry, ValClass, util.u8aToU8a(value));
    } else if (Array.isArray(value) || value instanceof Set) {
      return decodeSetFromSet(registry, ValClass, value);
    }

    throw new Error('BTreeSet: cannot decode type');
  }

  var _ValClass = /*#__PURE__*/_classPrivateFieldKey("ValClass");

  class BTreeSet extends Set {
    constructor(registry, valType, rawValue) {
      super(sortSet(decodeSet$1(registry, valType, rawValue)));
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _ValClass, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _ValClass)[_ValClass] = typeToConstructor(registry, valType);
    }

    static with(valType) {
      return class extends BTreeSet {
        constructor(registry, value) {
          super(registry, valType, value);
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      let len = util.compactToU8a(this.size).length;
      this.forEach(v => {
        len += v.encodedLength;
      });
      return len;
    }
    /**
     * @description Returns a hash of the value
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return this.size === 0;
    }
    /**
     * @description The actual set values as a string[]
     */


    get strings() {
      return [...super.values()].map(v => v.toString());
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return compareSet(this, other);
    }
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      const json = [];
      this.forEach(v => {
        json.push(v.toHuman(isExtended));
      });
      return json;
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      const json = [];
      this.forEach(v => {
        json.push(v.toJSON());
      });
      return json;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `BTreeSet<${this.registry.getClassName(_classPrivateFieldBase(this, _ValClass)[_ValClass]) || new (_classPrivateFieldBase(this, _ValClass)[_ValClass])(this.registry).toRawType()}>`;
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return util.stringify(this.toJSON());
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const encoded = new Array();

      if (!isBare) {
        encoded.push(util.compactToU8a(this.size));
      }

      this.forEach(v => {
        encoded.push(v.toU8a(isBare));
      });
      return util.u8aConcat(...encoded);
    }

  }

  /**
   * @name Compact
   * @description
   * A compact length-encoding codec wrapper. It performs the same function as Length, however
   * differs in that it uses a variable number of bytes to do the actual encoding. This is mostly
   * used by other types to add length-prefixed encoding, or in the case of wrapped types, taking
   * a number and making the compact representation thereof
   */

  var _Type$1 = /*#__PURE__*/_classPrivateFieldKey("Type");

  var _raw$1 = /*#__PURE__*/_classPrivateFieldKey("raw");

  class Compact {
    constructor(registry, Type, value = 0) {
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _Type$1, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _raw$1, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _Type$1)[_Type$1] = typeToConstructor(registry, Type);
      _classPrivateFieldBase(this, _raw$1)[_raw$1] = Compact.decodeCompact(registry, _classPrivateFieldBase(this, _Type$1)[_Type$1], value);
    }

    static with(Type) {
      return class extends Compact {
        constructor(registry, value) {
          super(registry, Type, value);
        }

      };
    }
    /** @internal */


    static decodeCompact(registry, Type, value) {
      if (value instanceof Compact) {
        return new Type(registry, _classPrivateFieldBase(value, _raw$1)[_raw$1]);
      } else if (util.isString(value) || util.isNumber(value) || util.isBn(value) || util.isBigInt(value)) {
        return new Type(registry, value);
      }

      return new Type(registry, util.compactFromU8a(value)[1]);
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].isEmpty;
    }
    /**
     * @description Returns the number of bits in the value
     */


    bitLength() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].bitLength();
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].eq(other instanceof Compact ? _classPrivateFieldBase(other, _raw$1)[_raw$1] : other);
    }
    /**
     * @description Returns a BigInt representation of the number
     */


    toBigInt() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toBigInt();
    }
    /**
     * @description Returns the BN representation of the number
     */


    toBn() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toBn();
    }
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */


    toHex(isLe) {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toHex(isLe);
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toHuman(isExtended);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toJSON();
    }
    /**
     * @description Returns the number representation for the value
     */


    toNumber() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toNumber();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `Compact<${this.registry.getClassName(_classPrivateFieldBase(this, _Type$1)[_Type$1]) || _classPrivateFieldBase(this, _raw$1)[_raw$1].toRawType()}>`;
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1].toString();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return util.compactToU8a(_classPrivateFieldBase(this, _raw$1)[_raw$1].toBn());
    }
    /**
     * @description Returns the embedded [[UInt]] or [[Moment]] value
     */


    unwrap() {
      return _classPrivateFieldBase(this, _raw$1)[_raw$1];
    }

  }

  var _neverError = /*#__PURE__*/_classPrivateFieldKey("neverError");

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /**
   * @name DoNotConstruct
   * @description
   * An unknown type that fails on construction with the type info
   */
  class DoNotConstruct {
    constructor(registry, typeName = 'DoNotConstruct') {
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _neverError, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _neverError)[_neverError] = new Error(`DoNotConstruct: Cannot construct unknown type ${typeName}`);
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    static with(typeName) {
      return class extends DoNotConstruct {
        constructor(registry) {
          super(registry, typeName);
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }
    /**
     * @description Checks if the value is an empty value (always true)
     */


    get isEmpty() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    eq() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toHex() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toHuman() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toJSON() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toRawType() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toString() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

    toU8a() {
      throw _classPrivateFieldBase(this, _neverError)[_neverError];
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  class HashMap extends CodecMap {
    static with(keyType, valType) {
      return class extends HashMap {
        constructor(registry, value) {
          super(registry, keyType, valType, value);
        }

      };
    }

  }

  const DEFAULT_UINT_BITS = 64; // Maximum allowed integer for JS is 2^53 - 1, set limit at 52
  // In this case however, we always print any >32 as hex

  const MAX_NUMBER_BITS = 52;
  const MUL_P = new util.BN(10000);
  const FORMATTERS = [['Perquintill', util.BN_QUINTILL], ['Perbill', util.BN_BILLION], ['Permill', util.BN_MILLION], ['Percent', util.BN_HUNDRED]];

  function toPercentage(value, divisor) {
    return `${(value.mul(MUL_P).div(divisor).toNumber() / 100).toFixed(2)}%`;
  }
  /** @internal */


  function decodeAbstracIntU8a(value, bitLength, isNegative) {
    if (!value.length) {
      return '0';
    }

    try {
      // NOTE When passing u8a in (typically from decoded data), it is always Little Endian
      return util.u8aToBn(value.subarray(0, bitLength / 8), {
        isLe: true,
        isNegative
      }).toString();
    } catch (error) {
      throw new Error(`AbstractInt: failed on ${util.stringify(value)}:: ${error.message}`);
    }
  }
  /** @internal */


  function decodeAbstractInt(value, bitLength, isNegative) {
    // This function returns a string, which will be passed in the BN
    // constructor. It would be ideal to actually return a BN, but there's a
    // bug: https://github.com/indutny/bn.js/issues/206.
    if (util.isHex(value, -1, true)) {
      return util.hexToBn(value, {
        isLe: false,
        isNegative
      }).toString();
    } else if (util.isU8a(value)) {
      return decodeAbstracIntU8a(value, bitLength, isNegative);
    } else if (util.isString(value)) {
      return new util.BN(value.toString(), 10).toString();
    }

    return util.bnToBn(value).toString();
  }
  /**
   * @name AbstractInt
   * @ignore
   * @noInheritDoc
   */


  var _bitLength = /*#__PURE__*/_classPrivateFieldKey("bitLength");

  var _isSigned = /*#__PURE__*/_classPrivateFieldKey("isSigned");

  class AbstractInt extends util.BN {
    constructor(registry, value = 0, bitLength = DEFAULT_UINT_BITS, isSigned = false) {
      super(decodeAbstractInt(value, bitLength, isSigned));
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _bitLength, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _isSigned, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _bitLength)[_bitLength] = bitLength;
      _classPrivateFieldBase(this, _isSigned)[_isSigned] = isSigned;
      const isPositive = this.gte(util.BN_ZERO);
      const maxBits = bitLength - (isSigned && isPositive ? 1 : 0);
      util.assert(isSigned || isPositive, () => `${this.toRawType()}: Negative number passed to unsigned type`);
      util.assert(super.bitLength() <= maxBits, () => `${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return _classPrivateFieldBase(this, _bitLength)[_bitLength] / 8;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is a zero value (align elsewhere)
     */


    get isEmpty() {
      return this.isZero();
    }
    /**
     * @description Checks if the value is an unsigned type
     */


    get isUnsigned() {
      return !_classPrivateFieldBase(this, _isSigned)[_isSigned];
    }
    /**
     * @description Returns the number of bits in the value
     */


    bitLength() {
      return _classPrivateFieldBase(this, _bitLength)[_bitLength];
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    eq(other) {
      // Here we are actually overriding the built-in .eq to take care of both
      // number and BN inputs (no `.eqn` needed) - numbers will be converted
      return super.eq(util.isHex(other) ? util.hexToBn(other.toString(), {
        isLe: false,
        isNegative: _classPrivateFieldBase(this, _isSigned)[_isSigned]
      }) : util.bnToBn(other));
    }
    /**
     * @description True if this value is the max of the type
     */


    isMax() {
      const u8a = this.toU8a().filter(b => b === 0xff);
      return u8a.length === _classPrivateFieldBase(this, _bitLength)[_bitLength] / 8;
    }
    /**
     * @description Returns a BigInt representation of the number
     */


    toBigInt() {
      return BigInt(this.toString());
    }
    /**
     * @description Returns the BN representation of the number. (Compatibility)
     */


    toBn() {
      return this;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex(isLe = false) {
      // For display/JSON, this is BE, for compare, use isLe
      return util.bnToHex(this, {
        bitLength: this.bitLength(),
        isLe,
        isNegative: !this.isUnsigned
      });
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toHuman(isExpanded) {
      const rawType = this.toRawType();

      if (rawType === 'Balance') {
        return this.isMax() ? 'everything' // FIXME In the case of multiples we need some way of detecting which instance this belongs
        // to. as it stands we will always format (incorrectly) against the first token defined
        : util.formatBalance(this, {
          decimals: this.registry.chainDecimals[0],
          withSi: true,
          withUnit: this.registry.chainTokens[0]
        });
      }

      const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];
      return divisor ? toPercentage(this, divisor) : util.formatNumber(this);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON(onlyHex = false) {
      // FIXME this return type should by string | number, however BN returns string
      // Options here are
      //   - super.bitLength() - the actual used bits
      //   - this.#bitLength - the type bits (this should be used, however contracts RPC is problematic)
      return onlyHex || super.bitLength() > MAX_NUMBER_BITS ? this.toHex() : this.toNumber();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      // NOTE In the case of balances, which have a special meaning on the UI
      // and can be interpreted differently, return a specific value for it so
      // underlying it always matches (no matter which length it actually is)
      return this instanceof this.registry.createClass('Balance') ? 'Balance' : `${this.isUnsigned ? 'u' : 'i'}${this.bitLength()}`;
    }
    /**
     * @description Returns the string representation of the value
     * @param base The base to use for the conversion
     */


    toString(base) {
      // only included here since we do not inherit docs
      return super.toString(base);
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return util.bnToU8a(this, {
        bitLength: this.bitLength(),
        isLe: true,
        isNegative: !this.isUnsigned
      });
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name Int
   * @description
   * A generic signed integer codec. For Substrate all numbers are Little Endian encoded,
   * this handles the encoding and decoding of those numbers. Upon construction
   * the bitLength is provided and any additional use keeps the number to this
   * length. This extends `BN`, so all methods available on a normal `BN` object
   * is available here.
   * @noInheritDoc
   */

  class Int extends AbstractInt {
    constructor(registry, value = 0, bitLength) {
      super(registry, value, bitLength, true);
    }

    static with(bitLength, typeName) {
      return class extends Int {
        constructor(registry, value) {
          super(registry, value, bitLength);
        }

        toRawType() {
          return typeName || super.toRawType();
        }

      };
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeJson(value) {
    return Object.entries(value || {});
  }
  /**
   * @name Json
   * @description
   * Wraps the a JSON structure retrieve via RPC. It extends the standard JS Map with. While it
   * implements a Codec, it is limited in that it can only be used with input objects via RPC,
   * i.e. no hex decoding. Unlike a struct, this waps a JSON object with unknown keys
   * @noInheritDoc
   */


  class Json extends Map {
    constructor(registry, value) {
      const decoded = decodeJson(value);
      super(decoded);
      this.registry = void 0;
      this.createdAtHash = void 0;
      this.registry = registry;
      decoded.forEach(([key]) => {
        util.isUndefined(this[key]) && Object.defineProperty(this, key, {
          enumerable: true,
          get: () => this.get(key)
        });
      });
    }
    /**
     * @description Always 0, never encodes as a Uint8Array
     */


    get encodedLength() {
      return 0;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return [...this.keys()].length === 0;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return compareMap(this, other);
    }
    /**
     * @description Unimplemented, will throw
     */


    toHex() {
      throw new Error('Unimplemented');
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return [...this.entries()].reduce((json, [key, value]) => {
        json[key] = util.isFunction(value.toHuman) ? value.toHuman() : value;
        return json;
      }, {});
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return [...this.entries()].reduce((json, [key, value]) => {
        json[key] = value;
        return json;
      }, {});
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Json';
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return util.stringify(this.toJSON());
    }
    /**
     * @description Unimplemented, will throw
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      throw new Error('Unimplemented');
    }

  }

  /** @internal */

  function decodeOptionU8a(registry, Type, value) {
    return !value.length || value[0] === 0 ? new Null(registry) : new Type(registry, value.subarray(1));
  }
  /** @internal */


  function decodeOption(registry, typeName, value) {
    if (util.isNull(value) || util.isUndefined(value) || value instanceof Null) {
      return new Null(registry);
    }

    const Type = typeToConstructor(registry, typeName); // eslint-disable-next-line @typescript-eslint/no-use-before-define

    if (value instanceof Option) {
      return decodeOption(registry, Type, value.value);
    } else if (value instanceof Type) {
      // don't re-create, use as it (which also caters for derived types)
      return value;
    } else if (util.isU8a(value)) {
      // the isU8a check happens last in the if-tree - since the wrapped value
      // may be an instance of it, so Type and Option checks go in first
      return decodeOptionU8a(registry, Type, value);
    }

    return new Type(registry, value);
  }
  /**
   * @name Option
   * @description
   * An Option is an optional field. Basically the first byte indicates that there is
   * is value to follow. If the byte is `1` there is an actual value. So the Option
   * implements that - decodes, checks for optionality and wraps the required structure
   * with a value if/as required/found.
   */


  var _Type = /*#__PURE__*/_classPrivateFieldKey("Type");

  var _raw = /*#__PURE__*/_classPrivateFieldKey("raw");

  class Option {
    constructor(registry, typeName, value) {
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _Type, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _raw, {
        writable: true,
        value: void 0
      });
      this.registry = registry;
      _classPrivateFieldBase(this, _Type)[_Type] = typeToConstructor(registry, typeName);
      _classPrivateFieldBase(this, _raw)[_raw] = decodeOption(registry, typeName, value);
    }

    static with(Type) {
      return class extends Option {
        constructor(registry, value) {
          super(registry, Type, value);
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      // boolean byte (has value, doesn't have) along with wrapped length
      return 1 + _classPrivateFieldBase(this, _raw)[_raw].encodedLength;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the Option has no value
     */


    get isEmpty() {
      return this.isNone;
    }
    /**
     * @description Checks if the Option has no value
     */


    get isNone() {
      return _classPrivateFieldBase(this, _raw)[_raw] instanceof Null;
    }
    /**
     * @description Checks if the Option has a value
     */


    get isSome() {
      return !this.isNone;
    }
    /**
     * @description The actual value for the Option
     */


    get value() {
      return _classPrivateFieldBase(this, _raw)[_raw];
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      if (other instanceof Option) {
        return this.isSome === other.isSome && this.value.eq(other.value);
      }

      return this.value.eq(other);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      // This attempts to align with the JSON encoding - actually in this case
      // the isSome value is correct, however the `isNone` may be problematic
      return this.isNone ? '0x' : util.u8aToHex(this.toU8a().subarray(1));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return _classPrivateFieldBase(this, _raw)[_raw].toHuman(isExtended);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return _classPrivateFieldBase(this, _raw)[_raw].toJSON();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType(isBare) {
      const wrapped = this.registry.getClassName(_classPrivateFieldBase(this, _Type)[_Type]) || new (_classPrivateFieldBase(this, _Type)[_Type])(this.registry).toRawType();
      return isBare ? wrapped : `Option<${wrapped}>`;
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return _classPrivateFieldBase(this, _raw)[_raw].toString();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      if (isBare) {
        return _classPrivateFieldBase(this, _raw)[_raw].toU8a(true);
      }

      const u8a = new Uint8Array(this.encodedLength);

      if (this.isSome) {
        u8a.set([1]);
        u8a.set(_classPrivateFieldBase(this, _raw)[_raw].toU8a(), 1);
      }

      return u8a;
    }
    /**
     * @description Returns the value that the Option represents (if available), throws if null
     */


    unwrap() {
      util.assert(this.isSome, 'Option: unwrapping a None value');
      return _classPrivateFieldBase(this, _raw)[_raw];
    }
    /**
     * @description Returns the value that the Option represents (if available) or defaultValue if none
     * @param defaultValue The value to return if the option isNone
     */


    unwrapOr(defaultValue) {
      return this.isSome ? this.unwrap() : defaultValue;
    }
    /**
     * @description Returns the value that the Option represents (if available) or defaultValue if none
     * @param defaultValue The value to return if the option isNone
     */


    unwrapOrDefault() {
      return this.isSome ? this.unwrap() : new (_classPrivateFieldBase(this, _Type)[_Type])(this.registry);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  /** @internal */
  function decodeTuple(registry, _Types, value) {
    if (util.isU8a(value) || util.isHex(value)) {
      return decodeU8a$3(registry, util.u8aToU8a(value), _Types);
    }

    const Types = Array.isArray(_Types) ? _Types : Object.values(_Types);
    return Types.map((Type, index) => {
      try {
        const entry = value === null || value === void 0 ? void 0 : value[index];

        if (entry instanceof Type) {
          return entry;
        }

        return new Type(registry, entry);
      } catch (error) {
        throw new Error(`Tuple: failed on ${index}:: ${error.message}`);
      }
    });
  }
  /**
   * @name Tuple
   * @description
   * A Tuple defines an anonymous fixed-length array, where each element has its
   * own type. It extends the base JS `Array` object.
   */


  class Tuple extends AbstractArray {
    constructor(registry, Types, value) {
      const Clazzes = Array.isArray(Types) ? Types.map(t => typeToConstructor(registry, t)) : util.isFunction(Types) || util.isString(Types) ? [typeToConstructor(registry, Types)] : mapToTypeMap(registry, Types);
      super(registry, decodeTuple(registry, Clazzes, value));
      this._Types = void 0;
      this._Types = Clazzes;
    }

    static with(Types) {
      return class extends Tuple {
        constructor(registry, value) {
          super(registry, Types, value);
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.reduce((total, entry) => total + entry.encodedLength, 0);
    }
    /**
     * @description The types definition of the tuple
     */


    get Types() {
      return Array.isArray(this._Types) ? this._Types.map(Type => new Type(this.registry).toRawType()) : Object.keys(this._Types);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      const types = (Array.isArray(this._Types) ? this._Types : Object.values(this._Types)).map(Type => this.registry.getClassName(Type) || new Type(this.registry).toRawType());
      return `(${types.join(',')})`;
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      // Overwrite the default toString representation of Array.
      return util.stringify(this.toJSON());
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return util.u8aConcat(...this.map(entry => entry.toU8a(isBare)));
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const MAX_LENGTH$2 = 64 * 1024;
  const l$2 = util.logger('Vec');
  /**
   * @name Vec
   * @description
   * This manages codec arrays. Internally it keeps track of the length (as decoded) and allows
   * construction with the passed `Type` in the constructor. It is an extension to Array, providing
   * specific encoding/decoding on top of the base type.
   */

  class Vec extends AbstractArray {
    constructor(registry, Type, value = []) {
      const Clazz = typeToConstructor(registry, Type);
      super(registry, Vec.decodeVec(registry, Clazz, value));
      this._Type = void 0;
      this._Type = Clazz;
    }
    /** @internal */


    static decodeVec(registry, Type, value) {
      if (Array.isArray(value)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return value.map((entry, index) => {
          try {
            return entry instanceof Type ? entry : new Type(registry, entry);
          } catch (error) {
            l$2.error(`Unable to decode on index ${index}`, error.message);
            throw error;
          }
        });
      }

      const u8a = util.u8aToU8a(value);
      const [offset, length] = util.compactFromU8a(u8a);
      util.assert(length.lten(MAX_LENGTH$2), () => `Vec length ${length.toString()} exceeds ${MAX_LENGTH$2}`);
      return decodeU8a$3(registry, u8a.subarray(offset), new Array(length.toNumber()).fill(Type));
    }

    static with(Type) {
      return class extends Vec {
        constructor(registry, value) {
          super(registry, Type, value);
        }

      };
    }
    /**
     * @description The type for the items
     */


    get Type() {
      return this._Type.name;
    }
    /**
     * @description Finds the index of the value in the array
     */


    indexOf(_other) {
      // convert type first, this removes overhead from the eq
      const other = _other instanceof this._Type ? _other : new this._Type(this.registry, _other);

      for (let i = 0; i < this.length; i++) {
        if (other.eq(this[i])) {
          return i;
        }
      }

      return -1;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `Vec<${this.registry.getClassName(this._Type) || new this._Type(this.registry).toRawType()}>`;
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const EMPTY = new Uint8Array();
  /**
   * @name Linkage
   * @description The wrapper for the result from a LinkedMap
   */

  class Linkage extends Struct {
    constructor(registry, Type, value) {
      super(registry, {
        previous: Option.with(Type),
        // eslint-disable-next-line sort-keys
        next: Option.with(Type)
      }, value);
    }

    static withKey(Type) {
      return class extends Linkage {
        constructor(registry, value) {
          super(registry, Type, value);
        }

      };
    }

    get previous() {
      return this.get('previous');
    }

    get next() {
      return this.get('next');
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `Linkage<${this.next.toRawType(true)}>`;
    }
    /**
     * @description Custom toU8a which with bare mode does not return the linkage if empty
     */


    toU8a() {
      // As part of a storage query (where these appear), in the case of empty, the values
      // are NOT populated by the node - follow the same logic, leaving it empty
      return this.isEmpty ? EMPTY : super.toU8a();
    }

  }

  var _rangeName = /*#__PURE__*/_classPrivateFieldKey("rangeName");

  /**
   * @name Range
   * @description
   * Rust `Range<T>` representation
   */
  class Range extends Tuple {
    constructor(registry, Type, value, rangeName = 'Range') {
      super(registry, {
        end: Type,
        start: Type
      }, value);
      Object.defineProperty(this, _rangeName, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldBase(this, _rangeName)[_rangeName] = rangeName;
    }

    static with(Types) {
      return class extends Range {
        constructor(registry, value) {
          super(registry, Types, value);
        }

      };
    }
    /**
     * @description Returns the starting range value
     */


    get start() {
      return this[0];
    }
    /**
     * @description Returns the ending range value
     */


    get end() {
      return this[1];
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `${_classPrivateFieldBase(this, _rangeName)[_rangeName]}<${this.start.toRawType()}>`;
    }

  }
  class RangeInclusive extends Range {
    constructor(registry, type, value) {
      super(registry, type, value, 'RangeInclusive');
    }

    static with(Types) {
      return class extends RangeInclusive {
        constructor(registry, value) {
          super(registry, Types, value);
        }

      };
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name Raw
   * @description
   * A basic wrapper around Uint8Array, with no frills and no fuss. It does differ
   * from other implementations where it will consume the full Uint8Array as passed to it.
   * As such it is meant to be subclassed where the wrapper takes care of the
   * actual lengths instead of used directly.
   * @noInheritDoc
   */

  class Raw extends Uint8Array {
    constructor(registry, value) {
      super(util.u8aToU8a(value));
      this.registry = void 0;
      this.createdAtHash = void 0;
      this.registry = registry;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.length;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Returns true if the wrapped value contains only ASCII printable characters
     */


    get isAscii() {
      return util.isAscii(this);
    }
    /**
     * @description Returns true if the type wraps an empty/default all-0 value
     */


    get isEmpty() {
      return !this.length || util.isUndefined(this.find(value => !!value));
    }
    /**
     * @description Returns true if the wrapped value contains only utf8 characters
     */


    get isUtf8() {
      return util.isUtf8(this);
    }
    /**
     * @description The length of the value
     */


    get length() {
      // only included here since we ignore inherited docs
      return super.length;
    }
    /**
     * @description Returns the number of bits in the value
     */


    bitLength() {
      return this.length * 8;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      if (other instanceof Uint8Array) {
        return this.length === other.length && !this.some((value, index) => value !== other[index]);
      }

      return this.eq(util.u8aToU8a(other));
    }
    /**
     * @description Create a new slice from the actual buffer. (compat)
     * @param start The position to start at
     * @param end The position to end at
     */


    slice(start, end) {
      // Like subarray below, we have to follow this approach since we are extending the TypeArray.
      // This happens especially when it comes to further extensions, the length may be an override
      return Uint8Array.from(this).slice(start, end);
    }
    /**
     * @description Create a new subarray from the actual buffer. (compat)
     * @param begin The position to start at
     * @param end The position to end at
     */


    subarray(begin, end) {
      return Uint8Array.from(this).subarray(begin, end);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this);
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.isAscii ? this.toUtf8() : this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toHex();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Raw';
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this.toHex();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return Uint8Array.from(this);
    }
    /**
     * @description Returns the wrapped data as a UTF-8 string
     */


    toUtf8() {
      util.assert(this.isUtf8, 'The character sequence is not a valid Utf8 string');
      return util.u8aToString(this);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name Result
   * @description
   * A Result maps to the Rust Result type, that can either wrap a success or error value
   */

  class Result extends Enum {
    constructor(registry, Ok, Err, value) {
      // NOTE This is order-dependent, Ok (with index 0) needs to be first
      // eslint-disable-next-line sort-keys
      super(registry, {
        Ok,
        Err
      }, value);
    }

    static with(Types) {
      return class extends Result {
        constructor(registry, value) {
          super(registry, Types.Ok, Types.Err, value);
        }

      };
    }
    /**
     * @description Returns the wrapper Err value (if isErr)
     */


    get asErr() {
      util.assert(this.isErr, 'Cannot extract Err value from Ok result, check isErr first');
      return this.value;
    }
    /**
     * @deprecated Use asErr
     */


    get asError() {
      return this.asErr;
    }
    /**
     * @description Returns the wrapper Ok value (if isOk)
     */


    get asOk() {
      util.assert(this.isOk, 'Cannot extract Ok value from Err result, check isOk first');
      return this.value;
    }
    /**
     * @description Checks if the Result has no value
     */


    get isEmpty() {
      return this.isOk && this.value.isEmpty;
    }
    /**
     * @description Checks if the Result wraps an Err value
     */


    get isErr() {
      return !this.isOk;
    }
    /**
     * @deprecated Use isErr
     */


    get isError() {
      return this.isErr;
    }
    /**
     * @description Checks if the Result wraps an Ok value
     */


    get isOk() {
      return this.index === 0;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      const Types = this._toRawStruct();

      return `Result<${Types.Ok},${Types.Err}>`;
    }

  }

  function encodeSet(setValues, value) {
    return value.reduce((result, value) => {
      return result.or(util.bnToBn(setValues[value] || 0));
    }, new util.BN(0));
  }
  /** @internal */


  function decodeSetArray(setValues, value) {
    return value.reduce((result, key) => {
      util.assert(!util.isUndefined(setValues[key]), () => `Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(', ')}`);
      result.push(key);
      return result;
    }, []);
  }
  /** @internal */


  function decodeSetNumber(setValues, _value) {
    const bn = util.bnToBn(_value);
    const result = Object.keys(setValues).reduce((result, key) => {
      if (bn.and(util.bnToBn(setValues[key])).eq(util.bnToBn(setValues[key]))) {
        result.push(key);
      }

      return result;
    }, []);
    const computed = encodeSet(setValues, result);
    util.assert(bn.eq(computed), () => `Set: Mismatch decoding '${bn.toString()}', computed as '${computed.toString()}' with ${result.join(', ')}`);
    return result;
  }
  /** @internal */


  function decodeSet(setValues, value = 0, bitLength) {
    util.assert(bitLength % 8 === 0, () => `Expected valid bitLength, power of 8, found ${bitLength}`);
    const byteLength = bitLength / 8;

    if (util.isString(value)) {
      return decodeSet(setValues, util.u8aToU8a(value), byteLength);
    } else if (util.isU8a(value)) {
      return value.length === 0 ? [] : decodeSetNumber(setValues, util.u8aToBn(value.subarray(0, byteLength), {
        isLe: true
      }));
    } else if (value instanceof Set || Array.isArray(value)) {
      const input = Array.isArray(value) ? value : [...value.values()];
      return decodeSetArray(setValues, input);
    }

    return decodeSetNumber(setValues, value);
  }
  /**
   * @name Set
   * @description
   * An Set is an array of string values, represented an an encoded type by
   * a bitwise representation of the values.
   */


  var _allowed = /*#__PURE__*/_classPrivateFieldKey("allowed");

  var _byteLength = /*#__PURE__*/_classPrivateFieldKey("byteLength");

  class CodecSet extends Set {
    constructor(registry, setValues, value, bitLength = 8) {
      super(decodeSet(setValues, value, bitLength));
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _allowed, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _byteLength, {
        writable: true,
        value: void 0
      });

      this.add = key => {
        // ^^^ add = () property done to assign this instance's this, otherwise Set.add creates "some" chaos
        // we have the isUndefined(this._setValues) in here as well, add is used internally
        // in the Set constructor (so it is undefined at this point, and should allow)
        util.assert(util.isUndefined(_classPrivateFieldBase(this, _allowed)[_allowed]) || !util.isUndefined(_classPrivateFieldBase(this, _allowed)[_allowed][key]), () => `Set: Invalid key '${key}' on add`);
        super.add(key);
        return this;
      };

      this.registry = registry;
      _classPrivateFieldBase(this, _allowed)[_allowed] = setValues;
      _classPrivateFieldBase(this, _byteLength)[_byteLength] = bitLength / 8;
    }

    static with(values, bitLength) {
      return class extends CodecSet {
        constructor(registry, value) {
          super(registry, values, value, bitLength);
          Object.keys(values).forEach(_key => {
            const iskey = `is${util.stringUpperFirst(util.stringCamelCase(_key))}`;
            util.isUndefined(this[iskey]) && Object.defineProperty(this, iskey, {
              enumerable: true,
              get: () => this.strings.includes(_key)
            });
          });
        }

      };
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return _classPrivateFieldBase(this, _byteLength)[_byteLength];
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description true is the Set contains no values
     */


    get isEmpty() {
      return this.size === 0;
    }
    /**
     * @description The actual set values as a string[]
     */


    get strings() {
      return [...super.values()];
    }
    /**
     * @description The encoded value for the set members
     */


    get valueEncoded() {
      return encodeSet(_classPrivateFieldBase(this, _allowed)[_allowed], this.strings);
    }
    /**
     * @description adds a value to the Set (extended to allow for validity checking)
     */


    /**
     * @description Compares the value of the input to see if there is a match
     */
    eq(other) {
      if (Array.isArray(other)) {
        // we don't actually care about the order, sort the values
        return compareArray(this.strings.sort(), other.sort());
      } else if (other instanceof Set) {
        return this.eq([...other.values()]);
      } else if (util.isNumber(other) || util.isBn(other)) {
        return this.valueEncoded.eq(util.bnToBn(other));
      }

      return false;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.strings;
    }
    /**
     * @description The encoded value for the set members
     */


    toNumber() {
      return this.valueEncoded.toNumber();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return util.stringify({
        _set: _classPrivateFieldBase(this, _allowed)[_allowed]
      });
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return `[${this.strings.join(', ')}]`;
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return util.bnToU8a(this.valueEncoded, {
        bitLength: _classPrivateFieldBase(this, _byteLength)[_byteLength] * 8,
        isLe: true
      });
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name UInt
   * @description
   * A generic unsigned integer codec. For Substrate all numbers are Little Endian encoded,
   * this handles the encoding and decoding of those numbers. Upon construction
   * the bitLength is provided and any additional use keeps the number to this
   * length. This extends `BN`, so all methods available on a normal `BN` object
   * is available here.
   * @noInheritDoc
   */

  class UInt extends AbstractInt {
    static with(bitLength, typeName) {
      return class extends UInt {
        constructor(registry, value) {
          super(registry, value, bitLength);
        }

        toRawType() {
          return typeName || super.toRawType();
        }

      };
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeU8aFixed(value, bitLength) {
    if (Array.isArray(value) || util.isString(value)) {
      return decodeU8aFixed(util.u8aToU8a(value), bitLength);
    }

    const byteLength = bitLength / 8;
    const u8a = new Uint8Array(byteLength);

    if (!value || !value.length) {
      return u8a;
    }

    util.assert(value.length >= byteLength, () => `Expected at least ${byteLength} bytes (${bitLength} bits), found ${value.length} bytes`);
    return value.subarray(0, byteLength);
  }
  /**
   * @name U8aFixed
   * @description
   * A U8a that manages a a sequence of bytes up to the specified bitLength. Not meant
   * to be used directly, rather is should be subclassed with the specific lengths.
   */


  class U8aFixed extends Raw {
    constructor(registry, value = new Uint8Array(), bitLength = 256) {
      super(registry, decodeU8aFixed(value, bitLength));
    }

    static with(bitLength, typeName) {
      return class extends U8aFixed {
        constructor(registry, value) {
          super(registry, value, bitLength);
        }

        toRawType() {
          return typeName || super.toRawType();
        }

      };
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `[u8;${this.length}]`;
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeVecFixed(registry, Type, allocLength, value) {
    const values = Vec.decodeVec(registry, Type, util.isU8a(value) || util.isHex(value) ? util.u8aConcat(util.compactToU8a(allocLength), value) : value);

    while (values.length < allocLength) {
      values.push(new Type(registry));
    }

    util.assert(values.length === allocLength, () => `Expected a length of exactly ${allocLength} entries`);
    return values;
  }
  /**
   * @name VecFixed
   * @description
   * This manages codec arrays of a fixed length
   */


  class VecFixed extends AbstractArray {
    constructor(registry, Type, length, value = []) {
      const Clazz = typeToConstructor(registry, Type);
      super(registry, decodeVecFixed(registry, Clazz, length, value));
      this._Type = void 0;
      this._Type = Clazz;
    }

    static with(Type, length) {
      return class extends VecFixed {
        constructor(registry, value) {
          super(registry, Type, length, value);
        }

      };
    }
    /**
     * @description The type for the items
     */


    get Type() {
      return new this._Type(this.registry).toRawType();
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.reduce((total, entry) => total + entry.encodedLength, 0);
    }

    toU8a() {
      // we override, we don't add the length prefix for ourselves, and at the same time we
      // ignore isBare on entries, since they should be properly encoded at all times
      const encoded = this.map(entry => entry.toU8a());
      return encoded.length ? util.u8aConcat(...encoded) : new Uint8Array([]);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return `[${this.Type};${this.length}]`;
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeBitVecU8a(value) {
    if (!value || !value.length) {
      return [0, new Uint8Array()];
    } // handle all other Uint8Array inputs, these do have a length prefix which is the number of bits encoded


    const [offset, length] = util.compactFromU8a(value);
    const total = offset + Math.ceil(length.toNumber() / 8);
    util.assert(total <= value.length, () => `BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);
    return [length.toNumber(), value.subarray(offset, total)];
  }
  /** @internal */


  function decodeBitVec(value) {
    if (Array.isArray(value) || util.isString(value)) {
      const u8a = util.u8aToU8a(value);
      return [u8a.length / 8, u8a];
    }

    return decodeBitVecU8a(value);
  }
  /**
   * @name BitVec
   * @description
   * A BitVec that represents an array of bits. The bits are however stored encoded. The difference between this
   * and a normal Bytes would be that the length prefix indicates the number of bits encoded, not the bytes
   */


  class BitVec extends Raw {
    constructor(registry, value) {
      const [decodedLength, u8a] = decodeBitVec(value);
      super(registry, u8a);
      this._decodedLength = void 0;
      this._decodedLength = decodedLength;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.length + util.compactToU8a(this._decodedLength).length;
    }

    toHuman() {
      return `0b${[...this.toU8a(true)].map(d => `00000000${d.toString(2)}`.slice(-8)).join('_')}`;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'BitVec';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const bitVec = super.toU8a();
      return isBare ? bitVec : util.u8aConcat(util.compactToU8a(this._decodedLength), bitVec);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeBool(value) {
    if (value instanceof Boolean) {
      return value.valueOf();
    } else if (util.isU8a(value)) {
      return value[0] === 1;
    }

    return !!value;
  }
  /**
   * @name bool
   * @description
   * Representation for a boolean value in the system. It extends the base JS `Boolean` class
   * @noInheritDoc
   */


  class bool extends Boolean {
    // eslint-disable-next-line @typescript-eslint/ban-types
    constructor(registry, value = false) {
      super(decodeBool(value));
      this.registry = void 0;
      this.createdAtHash = void 0;
      this.registry = registry;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return 1;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value (true when it wraps false/default)
     */


    get isEmpty() {
      return this.isFalse;
    }
    /**
     * @description Checks if the value is an empty value (always false)
     */


    get isFalse() {
      return !this.isTrue;
    }
    /**
     * @description Checks if the value is an empty value (always false)
     */


    get isTrue() {
      return this.valueOf();
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return this.valueOf() === (other instanceof Boolean ? other.valueOf() : other);
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.valueOf();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'bool';
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this.toJSON().toString();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      return new Uint8Array([this.valueOf() ? 1 : 0]);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const MAX_LENGTH$1 = 10 * 1024 * 1024;
  /** @internal */

  function decodeBytesU8a(value) {
    if (!value.length) {
      return new Uint8Array();
    } // handle all other Uint8Array inputs, these do have a length prefix


    const [offset, length] = util.compactFromU8a(value);
    const total = offset + length.toNumber();
    util.assert(length.lten(MAX_LENGTH$1), () => `Bytes length ${length.toString()} exceeds ${MAX_LENGTH$1}`);
    util.assert(total <= value.length, () => `Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);
    return value.subarray(offset, total);
  }
  /** @internal */


  function decodeBytes(value) {
    if (Array.isArray(value) || util.isString(value)) {
      return util.u8aToU8a(value);
    } else if (!(value instanceof Raw) && util.isU8a(value)) {
      // We are ensuring we are not a Raw instance. In the case of a Raw we already have gotten
      // rid of the length, i.e. new Bytes(new Bytes(...)) will work as expected
      return decodeBytesU8a(value);
    }

    return value;
  }
  /**
   * @name Bytes
   * @description
   * A Bytes wrapper for Vec<u8>. The significant difference between this and a normal Uint8Array
   * is that this version allows for length-encoding. (i.e. it is a variable-item codec, the same
   * as what is found in [[Text]] and [[Vec]])
   */


  class Bytes extends Raw {
    constructor(registry, value) {
      super(registry, decodeBytes(value));
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.length + util.compactToU8a(this.length).length;
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Bytes';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return isBare ? super.toU8a(isBare) : util.compactAddLength(this);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  /** @internal */
  function decodeDataU8a(registry, value) {
    const indicator = value[0];

    if (!indicator) {
      return [undefined, undefined];
    } else if (indicator >= 1 && indicator <= 33) {
      const length = indicator - 1;
      const data = value.subarray(1, length + 1); // in this case, we are passing a Raw back (since we have no length)

      return [registry.createType('Raw', data), 1];
    } else if (indicator >= 34 && indicator <= 37) {
      return [value.subarray(1, 32 + 1), indicator - 32]; // 34 becomes 2
    }

    throw new Error(`Unable to decode Data, invalid indicator byte ${indicator}`);
  }
  /** @internal */


  function decodeData(registry, value) {
    if (!value) {
      return [undefined, undefined];
    } else if (util.isU8a(value) || util.isString(value)) {
      return decodeDataU8a(registry, util.u8aToU8a(value));
    } // assume we have an Enum or an  object input, handle this via the normal Enum decoding


    return [value, undefined];
  }
  /**
   * @name Data
   * @description
   * A [[Data]] container with node, raw or hashed data
   */


  class Data extends Enum {
    constructor(registry, value) {
      super(registry, {
        None: 'Null',
        // 0
        Raw: 'Bytes',
        // 1
        // eslint-disable-next-line sort-keys
        BlakeTwo256: 'H256',
        // 2
        Sha256: 'H256',
        // 3
        // eslint-disable-next-line sort-keys
        Keccak256: 'H256',
        // 4
        ShaThree256: 'H256' // 5

      }, ...decodeData(registry, value));
      util.assert(!this.isRaw || this.asRaw.length <= 32, 'Data.Raw values are limited to a maximum length of 32 bytes');
    }

    get asBlakeTwo256() {
      return this.value;
    }

    get asKeccak256() {
      return this.value;
    }

    get asRaw() {
      return this.value;
    }

    get asSha256() {
      return this.value;
    }

    get asShaThree256() {
      return this.value;
    }

    get isBlakeTwo256() {
      return this.index === 2;
    }

    get isKeccak256() {
      return this.index === 4;
    }

    get isNone() {
      return this.index === 0;
    }

    get isRaw() {
      return this.index === 1;
    }

    get isSha256() {
      return this.index === 3;
    }

    get isShaThree256() {
      return this.index === 5;
    }
    /**
     * @description The encoded length
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     */


    toU8a() {
      if (this.index === 0) {
        return new Uint8Array(1);
      } else if (this.index === 1) {
        // don't add the length, just the data
        const data = this.value.toU8a(true);
        const length = Math.min(data.length, 32);
        const u8a = new Uint8Array(length + 1);
        u8a.set([length + 1], 0);
        u8a.set(data.subarray(0, length), 1);
        return u8a;
      } // otherwise we simply have a hash


      const u8a = new Uint8Array(33);
      u8a.set([this.index + 32], 0);
      u8a.set(this.value.toU8a(), 1);
      return u8a;
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i8
   * @description
   * An 8-bit signed integer
   */

  class i8 extends Int.with(8) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i8';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i16
   * @description
   * A 16-bit signed integer
   */

  class i16 extends Int.with(16) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i16';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i32
   * @description
   * A 32-bit signed integer
   */

  class i32 extends Int.with(32) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i32';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i64
   * @description
   * A 64-bit signed integer
   */

  class i64 extends Int.with(64) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i64';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i128
   * @description
   * A 128-bit signed integer
   */

  class i128 extends Int.with(128) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i128';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name i256
   * @description
   * A 256-bit signed integer
   */

  class i256 extends Int.with(256) {
    constructor(...args) {
      super(...args);
      this.__IntType = 'i256';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // hasher type -> [initialHashLength, canDecodeKey]
  const HASHER_MAP = {
    // opaque
    Blake2_128: [16, false],
    // eslint-disable-line camelcase
    Blake2_128Concat: [16, true],
    // eslint-disable-line camelcase
    Blake2_256: [32, false],
    // eslint-disable-line camelcase
    Identity: [0, true],
    Twox128: [16, false],
    Twox256: [32, false],
    Twox64Concat: [8, true]
  };
  function unwrapStorageSi(type) {
    return type.isPlain ? type.asPlain : type.asMap.value;
  }
  /** @internal */

  function unwrapStorageType(registry, type, isOptional) {
    const typeDef = registry.lookup.getTypeDef(unwrapStorageSi(type));
    const outputType = typeDef.lookupName || typeDef.type;
    return isOptional ? `Option<${outputType}>` : outputType;
  }
  /** @internal */

  function decodeStorageKey(value) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (value instanceof StorageKey) {
      return {
        key: value,
        method: value.method,
        section: value.section
      };
    } else if (!value || util.isString(value) || util.isU8a(value)) {
      // let Bytes handle these inputs
      return {
        key: value
      };
    } else if (util.isFunction(value)) {
      return {
        key: value(),
        method: value.method,
        section: value.section
      };
    } else if (Array.isArray(value)) {
      const [fn, args = []] = value;
      util.assert(util.isFunction(fn), 'Expected function input for key construction');
      return {
        key: fn(...args),
        method: fn.method,
        section: fn.section
      };
    }

    throw new Error(`Unable to convert input ${value} to StorageKey`);
  }
  /** @internal */


  function decodeHashers(registry, value, hashers) {
    // the storage entry is xxhashAsU8a(prefix, 128) + xxhashAsU8a(method, 128), 256 bits total
    let offset = 32;
    return hashers.reduce((result, [hasher, type]) => {
      const [hashLen, canDecode] = HASHER_MAP[hasher.type];
      const decoded = canDecode ? registry.createType(registry.createLookupType(type), value.subarray(offset + hashLen)) : registry.createType('Raw', value.subarray(offset, offset + hashLen));
      offset += hashLen + (canDecode ? decoded.encodedLength : 0);
      result.push(decoded);
      return result;
    }, []);
  }
  /** @internal */


  function decodeArgsFromMeta(registry, value, meta) {
    if (!meta || !meta.type.isMap) {
      return [];
    }

    const {
      hashers,
      key
    } = meta.type.asMap;
    const keys = hashers.length === 1 ? [key] : registry.lookup.getSiType(key).def.asTuple;
    return decodeHashers(registry, value, hashers.map((h, i) => [h, keys[i]]));
  }
  /** @internal */


  function getMeta(value) {
    if (value instanceof StorageKey) {
      return value.meta;
    } else if (util.isFunction(value)) {
      return value.meta;
    } else if (Array.isArray(value)) {
      const [fn] = value;
      return fn.meta;
    }

    return undefined;
  }
  /** @internal */


  function getType(registry, value) {
    if (value instanceof StorageKey) {
      return value.outputType;
    } else if (util.isFunction(value)) {
      return unwrapStorageType(registry, value.meta.type);
    } else if (Array.isArray(value)) {
      const [fn] = value;

      if (fn.meta) {
        return unwrapStorageType(registry, fn.meta.type);
      }
    } // If we have no type set, default to Raw


    return 'Raw';
  }
  /**
   * @name StorageKey
   * @description
   * A representation of a storage key (typically hashed) in the system. It can be
   * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
   */


  class StorageKey extends Bytes {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore This is assigned via this.decodeArgsFromMeta()
    constructor(registry, value, override = {}) {
      const {
        key,
        method,
        section
      } = decodeStorageKey(value);
      super(registry, key);
      this._args = void 0;
      this._meta = void 0;
      this._outputType = void 0;
      this._method = void 0;
      this._section = void 0;
      this._outputType = getType(registry, value); // decode the args (as applicable based on the key and the hashers, after all init)

      this.setMeta(getMeta(value), override.section || section, override.method || method);
    }
    /**
     * @description Return the decoded arguments (applicable to map with decodable values)
     */


    get args() {
      return this._args;
    }
    /**
     * @description The metadata or `undefined` when not available
     */


    get meta() {
      return this._meta;
    }
    /**
     * @description The key method or `undefined` when not specified
     */


    get method() {
      return this._method;
    }
    /**
     * @description The output type
     */


    get outputType() {
      return this._outputType;
    }
    /**
     * @description The key section or `undefined` when not specified
     */


    get section() {
      return this._section;
    }

    is(key) {
      return key.section === this.section && key.method === this.method;
    }
    /**
     * @description Sets the meta for this key
     */


    setMeta(meta, section, method) {
      this._meta = meta;
      this._method = method || this._method;
      this._section = section || this._section;

      if (meta) {
        this._outputType = unwrapStorageType(this.registry, meta.type);
      }

      try {
        this._args = decodeArgsFromMeta(this.registry, this.toU8a(true), this.meta);
      } catch (error) {// ignore...
      }

      return this;
    }
    /**
     * @description Returns the Human representation for this type
     */


    toHuman() {
      return this._args.length ? this._args.map(arg => arg.toHuman()) : super.toHuman();
    }
    /**
     * @description Returns the raw type for this
     */


    toRawType() {
      return 'StorageKey';
    }

  }

  const MAX_LENGTH = 128 * 1024;
  /** @internal */

  function decodeText(value) {
    if (util.isHex(value)) {
      return util.u8aToString(util.hexToU8a(value));
    } else if (value instanceof Uint8Array) {
      if (!value.length) {
        return '';
      } // for Raw, the internal buffer does not have an internal length
      // (the same applies in e.g. Bytes, where length is added at encoding-time)


      if (value instanceof Raw) {
        return util.u8aToString(value);
      }

      const [offset, length] = util.compactFromU8a(value);
      const total = offset + length.toNumber();
      util.assert(length.lten(MAX_LENGTH), () => `Text: length ${length.toString()} exceeds ${MAX_LENGTH}`);
      util.assert(total <= value.length, () => `Text: required length less than remainder, expected at least ${total}, found ${value.length}`);
      return util.u8aToString(value.subarray(offset, total));
    }

    return value ? value.toString() : '';
  }
  /**
   * @name Text
   * @description
   * This is a string wrapper, along with the length. It is used both for strings as well
   * as items such as documentation. It simply extends the standard JS `String` built-in
   * object, inheriting all methods exposed from `String`.
   * @noInheritDoc
   */
  // TODO
  //   - Strings should probably be trimmed (docs do come through with extra padding)


  var _override = /*#__PURE__*/_classPrivateFieldKey("override");

  class Text extends String {
    constructor(registry, value) {
      super(decodeText(value));
      this.registry = void 0;
      this.createdAtHash = void 0;
      Object.defineProperty(this, _override, {
        writable: true,
        value: null
      });
      this.registry = registry;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return this.length === 0;
    }
    /**
     * @description The length of the value
     */


    get length() {
      // only included here since we ignore inherited docs
      return super.length;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return util.isString(other) ? this.toString() === other.toString() : false;
    }
    /**
     * @description Set an override value for this
     */


    setOverride(override) {
      _classPrivateFieldBase(this, _override)[_override] = override;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      // like with Vec<u8>, when we are encoding to hex, we don't actually add
      // the length prefix (it is already implied by the actual string length)
      return util.u8aToHex(this.toU8a(true));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toString();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Text';
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return _classPrivateFieldBase(this, _override)[_override] || super.toString();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      // NOTE Here we use the super toString (we are not taking overrides into account,
      // rather encoding the original value the string was constructed with)
      const encoded = util.stringToU8a(super.toString());
      return isBare ? encoded : util.compactAddLength(encoded);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  const BOUNDED = ['BTreeMap', 'BTreeSet', 'HashMap', 'Vec'];
  const ALLOWED_BOXES = BOUNDED.concat(['Compact', 'DoNotConstruct', 'Int', 'Linkage', 'Range', 'RangeInclusive', 'Result', 'Option', 'UInt']);
  const BOX_PRECEDING = ['<', '(', '[', '"', ',', ' ']; // start of vec, tuple, fixed array, part of struct def or in tuple

  const mappings = [// alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
  alias('<T::InherentOfflineReport as InherentOfflineReport>::Inherent', 'InherentOfflineReport', false), alias('VecDeque<', 'Vec<', false), // <T::Balance as HasCompact>
  cleanupCompact(), // Change BoundedVec<Type, Size> to Vec<Type>
  removeExtensions('Bounded', true), // Change WeakVec<Type> to Vec<Type>
  removeExtensions('Weak', false), // Remove all the trait prefixes
  removeTraits(), // remove PairOf<T> -> (T, T)
  removePairOf(), // remove boxing, `Box<Proposal>` -> `Proposal`
  removeWrap('Box<'), // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
  removeGenerics(), // alias String -> Text (compat with jsonrpc methods)
  alias('String', 'Text'), // alias Vec<u8> -> Bytes
  alias('Vec<u8>', 'Bytes'), alias('&\\[u8\\]', 'Bytes'), alias("&'static\\[u8\\]", 'Bytes'), // alias RawAddress -> Address
  alias('RawAddress', 'Address'), // lookups, mapped to Address/AccountId as appropriate in runtime
  alias('Lookup::Source', 'LookupSource'), alias('Lookup::Target', 'LookupTarget'), // HACK duplication between contracts & primitives, however contracts prefixed with exec
  alias('exec::StorageKey', 'ContractStorageKey'), // flattens tuples with one value, `(AccountId)` -> `AccountId`
  flattenSingleTuple(), // converts ::Type to Type, <T as Trait<I>>::Proposal -> Proposal
  removeColons()]; // given a starting index, find the closing >

  function findClosing(value, start) {
    let depth = 0;

    for (let index = start; index < value.length; index++) {
      if (value[index] === '>') {
        if (!depth) {
          return index;
        }

        depth--;
      } else if (value[index] === '<') {
        depth++;
      }
    }

    throw new Error(`Unable to find closing matching <> on '${value}' (start ${start})`);
  }
  function alias(src, dest, withChecks = true) {
    return value => value.replace(new RegExp(`(^${src}|${BOX_PRECEDING.map(box => `\\${box}${src}`).join('|')})`, 'g'), src => withChecks && BOX_PRECEDING.includes(src[0]) ? `${src[0]}${dest}` : dest);
  }
  function cleanupCompact() {
    return value => {
      for (let index = 0; index < value.length; index++) {
        if (value[index] === '<') {
          const end = findClosing(value, index + 1) - 14;

          if (value.substr(end, 14) === ' as HasCompact') {
            value = `Compact<${value.substr(index + 1, end - index - 1)}>`;
          }
        }
      }

      return value;
    };
  }
  function flattenSingleTuple() {
    return value => value // tuples may have trailing commas, e.g. (u32, BlockNumber, )
    .replace(/,\)/g, ')') // change (u32) -> u32
    .replace(/\(([^,]+)\)/, '$1');
  }

  function replaceTagWith(value, matcher, replacer) {
    let index = -1;

    while (true) {
      index = value.indexOf(matcher, index + 1);

      if (index === -1) {
        return value;
      }

      const start = index + matcher.length;
      const end = findClosing(value, start);
      value = `${value.substr(0, index)}${replacer(value.substr(start, end - start))}${value.substr(end + 1)}`;
    }
  } // remove the Bounded* or Weak* wrappers


  function removeExtensions(type, isSized) {
    return value => BOUNDED.reduce((value, tag) => replaceTagWith(value, `${type}${tag}<`, inner => {
      const parts = inner.split(',').map(s => s.trim()).filter(s => s);

      if (isSized) {
        parts.pop();
      }

      return `${tag}<${parts.join(',')}>`;
    }), value);
  }
  function removeColons() {
    return (value, {
      allowNamespaces
    } = {}) => {
      let index = 0;

      while (index !== -1) {
        index = value.indexOf('::');

        if (index === 0) {
          value = value.substr(2);
        } else if (index !== -1) {
          if (allowNamespaces) {
            return value;
          }

          let start = index;

          while (start !== -1 && !BOX_PRECEDING.includes(value[start])) {
            start--;
          }

          value = `${value.substr(0, start + 1)}${value.substr(index + 2)}`;
        }
      }

      return value;
    };
  }
  function removeGenerics() {
    return value => {
      for (let index = 0; index < value.length; index++) {
        if (value[index] === '<') {
          // check against the allowed wrappers, be it Vec<..>, Option<...> ...
          const box = ALLOWED_BOXES.find(box => {
            const start = index - box.length;
            return start >= 0 && value.substr(start, box.length) === box && ( // make sure it is stand-alone, i.e. don't catch ElectionResult<...> as Result<...>
            start === 0 || BOX_PRECEDING.includes(value[start - 1]));
          }); // we have not found anything, unwrap generic innards

          if (!box) {
            const end = findClosing(value, index + 1);
            value = `${value.substr(0, index)}${value.substr(end + 1)}`;
          }
        }
      }

      return value;
    };
  } // remove the PairOf wrappers

  function removePairOf() {
    const replacer = inner => `(${inner},${inner})`;

    return value => replaceTagWith(value, 'PairOf<', replacer);
  } // remove the type traits

  function removeTraits() {
    return value => value // remove all whitespaces
    .replace(/\s/g, '') // anything `T::<type>` to end up as `<type>`
    .replace(/(T|Self)::/g, '') // replace `<T as Trait>::` (whitespaces were removed above)
    .replace(/<(T|Self)asTrait>::/g, '') // replace `<T as something::Trait>::` (whitespaces were removed above)
    .replace(/<Tas[a-z]+::Trait>::/g, '') // replace <Lookup as StaticLookup>
    .replace(/<LookupasStaticLookup>/g, 'Lookup') // replace `<...>::Type`
    .replace(/::Type/g, '');
  } // remove wrapping values, i.e. Box<Proposal> -> Proposal

  function removeWrap(check) {
    const replacer = inner => inner;

    return value => replaceTagWith(value, check, replacer);
  } // eslint-disable-next-line @typescript-eslint/ban-types

  function sanitize(value, options) {
    return mappings.reduce((result, fn) => fn(result, options), value.toString()).trim();
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name Type
   * @description
   * This is a extended version of Text, specifically to handle types. Here we rely fully
   * on what Text provides us, however we also adjust the types received from the runtime,
   * i.e. we remove the `T::` prefixes found in some types for consistency across implementation.
   */

  class Type extends Text {
    constructor(registry, value = '') {
      super(registry, value);
      this.setOverride(sanitize(this.toString()));
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Type';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u8
   * @description
   * An 8-bit unsigned integer
   */

  class u8 extends UInt.with(8) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u8';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u16
   * @description
   * A 16-bit unsigned integer
   */

  class u16 extends UInt.with(16) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u16';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u32
   * @description
   * A 32-bit unsigned integer
   */

  class u32 extends UInt.with(32) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u32';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u64
   * @description
   * A 64-bit unsigned integer
   */

  class u64 extends UInt.with(64) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u64';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u128
   * @description
   * A 128-bit unsigned integer
   */

  class u128 extends UInt.with(128) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u128';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name u256
   * @description
   * A 256-bit unsigned integer
   */

  class u256 extends UInt.with(256) {
    constructor(...args) {
      super(...args);
      this.__UIntType = 'u256';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name USize
   * @description
   * A System default unsigned number, typically used in RPC to report non-consensus
   * data. It is a wrapper for [[U32]] as a WASM default (as generated by Rust bindings).
   * It is not to be used, since it created consensus mismatches.
   */

  class usize extends u32 {
    constructor(registry, value) {
      super(registry, value);
      throw new Error('The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.');
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  exports.TypeDefInfo = void 0;

  (function (TypeDefInfo) {
    TypeDefInfo[TypeDefInfo["BTreeMap"] = 0] = "BTreeMap";
    TypeDefInfo[TypeDefInfo["BTreeSet"] = 1] = "BTreeSet";
    TypeDefInfo[TypeDefInfo["Compact"] = 2] = "Compact";
    TypeDefInfo[TypeDefInfo["DoNotConstruct"] = 3] = "DoNotConstruct";
    TypeDefInfo[TypeDefInfo["Enum"] = 4] = "Enum";
    TypeDefInfo[TypeDefInfo["HashMap"] = 5] = "HashMap";
    TypeDefInfo[TypeDefInfo["Int"] = 6] = "Int";
    TypeDefInfo[TypeDefInfo["Linkage"] = 7] = "Linkage";
    TypeDefInfo[TypeDefInfo["Null"] = 8] = "Null";
    TypeDefInfo[TypeDefInfo["Option"] = 9] = "Option";
    TypeDefInfo[TypeDefInfo["Plain"] = 10] = "Plain";
    TypeDefInfo[TypeDefInfo["Range"] = 11] = "Range";
    TypeDefInfo[TypeDefInfo["Result"] = 12] = "Result";
    TypeDefInfo[TypeDefInfo["Set"] = 13] = "Set";
    TypeDefInfo[TypeDefInfo["Si"] = 14] = "Si";
    TypeDefInfo[TypeDefInfo["Struct"] = 15] = "Struct";
    TypeDefInfo[TypeDefInfo["Tuple"] = 16] = "Tuple";
    TypeDefInfo[TypeDefInfo["UInt"] = 17] = "UInt";
    TypeDefInfo[TypeDefInfo["Vec"] = 18] = "Vec";
    TypeDefInfo[TypeDefInfo["VecFixed"] = 19] = "VecFixed";
  })(exports.TypeDefInfo || (exports.TypeDefInfo = {}));

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function isNotNested(...counters) {
    return !counters.some(counter => counter !== 0);
  } // safely split a string on ', ' while taking care of any nested occurences


  function typeSplit(type) {
    let [cDepth, fDepth, sDepth, tDepth, start] = [0, 0, 0, 0, 0];
    const result = [];

    const extract = index => {
      if (isNotNested(cDepth, fDepth, sDepth, tDepth)) {
        result.push(type.substr(start, index - start).trim());
        start = index + 1;
      }
    };

    for (let index = 0; index < type.length; index++) {
      switch (type[index]) {
        // if we are not nested, add the type
        case ',':
          extract(index);
          break;
        // adjust compact/vec (and friends) depth

        case '<':
          cDepth++;
          break;

        case '>':
          cDepth--;
          break;
        // adjust fixed vec depths

        case '[':
          fDepth++;
          break;

        case ']':
          fDepth--;
          break;
        // adjust struct depth

        case '{':
          sDepth++;
          break;

        case '}':
          sDepth--;
          break;
        // adjust tuple depth

        case '(':
          tDepth++;
          break;

        case ')':
          tDepth--;
          break;
      }
    }

    util.assert(isNotNested(cDepth, fDepth, sDepth, tDepth), () => `Invalid definition (missing terminators) found in ${type}`); // the final leg of the journey

    result.push(type.substr(start, type.length - start).trim());
    return result;
  }

  function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const MAX_NESTED = 64;
  const KNOWN_INTERNALS = ['_alias', '_fallback'];

  function getTypeString(typeOrObj) {
    return util.isString(typeOrObj) ? typeOrObj.toString() : JSON.stringify(typeOrObj);
  }

  function isRustEnum(details) {
    const values = Object.values(details);

    if (values.some(v => util.isNumber(v))) {
      util.assert(values.every(v => util.isNumber(v) && v >= 0 && v <= 255), 'Invalid number-indexed enum definition');
      return false;
    }

    return true;
  } // decode an enum of either of the following forms
  //  { _enum: ['A', 'B', 'C'] }
  //  { _enum: { A: AccountId, B: Balance, C: u32 } }
  //  { _enum: { A: 1, B: 2 } }


  function _decodeEnum(value, details, count) {
    value.info = exports.TypeDefInfo.Enum; // not as pretty, but remain compatible with oo7 for both struct and Array types

    if (Array.isArray(details)) {
      value.sub = details.map((name, index) => ({
        index,
        info: exports.TypeDefInfo.Plain,
        name,
        type: 'Null'
      }));
    } else if (isRustEnum(details)) {
      value.sub = Object.entries(details).map(([name, typeOrObj], index) => _objectSpread$i(_objectSpread$i({}, getTypeDef(getTypeString(typeOrObj || 'Null'), {
        name
      }, count)), {}, {
        index
      }));
    } else {
      value.sub = Object.entries(details).map(([name, index]) => ({
        index,
        info: exports.TypeDefInfo.Plain,
        name,
        type: 'Null'
      }));
    }

    return value;
  } // decode a set of the form
  //   { _set: { A: 0b0001, B: 0b0010, C: 0b0100 } }


  function _decodeSet(value, details) {
    value.info = exports.TypeDefInfo.Set;
    value.length = details._bitLength;
    value.sub = Object.entries(details).filter(([name]) => !name.startsWith('_')).map(([name, index]) => ({
      index,
      info: exports.TypeDefInfo.Plain,
      name,
      type: 'Null'
    }));
    return value;
  } // decode a struct, set or enum
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function _decodeStruct(value, type, _, count) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const parsed = JSON.parse(type);
    const keys = Object.keys(parsed);

    if (keys.length === 1 && keys[0] === '_enum') {
      return _decodeEnum(value, parsed[keys[0]], count);
    } else if (keys.length === 1 && keys[0] === '_set') {
      return _decodeSet(value, parsed[keys[0]]);
    }

    value.alias = parsed._alias ? new Map(Object.entries(parsed._alias)) : undefined;
    value.fallbackType = parsed._fallback;
    value.sub = keys.filter(name => !KNOWN_INTERNALS.includes(name)).map(name => getTypeDef(getTypeString(parsed[name]), {
      name
    }, count));
    return value;
  } // decode a fixed vector, e.g. [u8;32]
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function _decodeFixedVec(value, type, _, count) {
    const max = type.length - 1;
    let index = -1;
    let inner = 0;

    for (let i = 1; i < max && index === -1; i++) {
      if (type[i] === ';' && inner === 0) {
        index = i;
      } else if (['[', '(', '<'].includes(type[i])) {
        inner++;
      } else if ([']', ')', '>'].includes(type[i])) {
        inner--;
      }
    }

    util.assert(index !== -1, () => `${type}: Unable to extract location of ';'`);
    const vecType = type.substr(1, index - 1);
    const [strLength, displayName] = type.substr(index + 1, max - index - 1).split(';');
    const length = parseInt(strLength.trim(), 10); // as a first round, only u8 via u8aFixed, we can add more support

    util.assert(length <= 256, () => `${type}: Only support for [Type; <length>], where length <= 256`);
    value.displayName = displayName;
    value.length = length;
    value.sub = getTypeDef(vecType, {}, count);
    return value;
  }

  function _decodeRange(value, _, subType) {
    const Type = getTypeDef(subType);
    value.sub = [Type, Type];
    return value;
  } // decode a tuple


  function _decodeTuple(value, _, subType, count) {
    value.sub = subType.length === 0 ? [] : typeSplit(subType).map(inner => getTypeDef(inner, {}, count));
    return value;
  } // decode a Int/UInt<bitLength[, name]>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function _decodeAnyInt(value, type, _, clazz) {
    const [strLength, displayName] = type.substr(clazz.length + 1, type.length - clazz.length - 1 - 1).split(',');
    const length = parseInt(strLength.trim(), 10); // as a first round, only u8 via u8aFixed, we can add more support

    util.assert(length <= 8192 && length % 8 === 0, () => `${type}: Only support for ${clazz}<bitLength>, where length <= 8192 and a power of 8, found ${length}`);
    value.displayName = displayName;
    value.length = length;
    return value;
  }

  function _decodeInt(value, type, subType) {
    return _decodeAnyInt(value, type, subType, 'Int');
  }

  function _decodeUInt(value, type, subType) {
    return _decodeAnyInt(value, type, subType, 'UInt');
  } // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function _decodeDoNotConstruct(value, type, _) {
    const NAME_LENGTH = 'DoNotConstruct'.length;
    value.displayName = type.substr(NAME_LENGTH + 1, type.length - NAME_LENGTH - 1 - 1);
    return value;
  }

  function hasWrapper(type, [start, end]) {
    return type.substr(0, start.length) === start && type.substr(-1 * end.length) === end;
  }

  const nestedExtraction = [['[', ']', exports.TypeDefInfo.VecFixed, _decodeFixedVec], ['{', '}', exports.TypeDefInfo.Struct, _decodeStruct], ['(', ')', exports.TypeDefInfo.Tuple, _decodeTuple], // the inner for these are the same as tuple, multiple values
  ['BTreeMap<', '>', exports.TypeDefInfo.BTreeMap, _decodeTuple], ['HashMap<', '>', exports.TypeDefInfo.HashMap, _decodeTuple], ['Int<', '>', exports.TypeDefInfo.Int, _decodeInt], // Not sure about these, have a specific implementation?
  ['Range<', '>', exports.TypeDefInfo.Tuple, _decodeRange], ['RangeInclusive<', '>', exports.TypeDefInfo.Tuple, _decodeRange], ['Result<', '>', exports.TypeDefInfo.Result, _decodeTuple], ['UInt<', '>', exports.TypeDefInfo.UInt, _decodeUInt], ['DoNotConstruct<', '>', exports.TypeDefInfo.DoNotConstruct, _decodeDoNotConstruct]];
  const wrappedExtraction = [['BTreeSet<', '>', exports.TypeDefInfo.BTreeSet], ['Compact<', '>', exports.TypeDefInfo.Compact], ['Linkage<', '>', exports.TypeDefInfo.Linkage], ['Option<', '>', exports.TypeDefInfo.Option], ['Vec<', '>', exports.TypeDefInfo.Vec]];

  function extractSubType(type, [start, end]) {
    return type.substr(start.length, type.length - start.length - end.length);
  } // eslint-disable-next-line @typescript-eslint/ban-types


  function getTypeDef(_type, {
    displayName,
    name
  } = {}, count = 0) {
    // create the type via Type, allowing types to be sanitized
    const type = sanitize(_type);
    const value = {
      displayName,
      info: exports.TypeDefInfo.Plain,
      name,
      type
    };
    util.assert(++count !== MAX_NESTED, 'getTypeDef: Maximum nested limit reached');
    const nested = nestedExtraction.find(nested => hasWrapper(type, nested));

    if (nested) {
      value.info = nested[2];
      return nested[3](value, type, extractSubType(type, nested), count);
    }

    const wrapped = wrappedExtraction.find(wrapped => hasWrapper(type, wrapped));

    if (wrapped) {
      value.info = wrapped[2];
      value.sub = getTypeDef(extractSubType(type, wrapped), {}, count);
    }

    return value;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function getSubDefArray(value) {
    util.assert(value.sub && Array.isArray(value.sub), () => `Expected subtype as TypeDef[] in ${util.stringify(value)}`);
    return value.sub;
  }

  function getSubDef(value) {
    util.assert(value.sub && !Array.isArray(value.sub), () => `Expected subtype as TypeDef in ${util.stringify(value)}`);
    return value.sub;
  }

  function getSubType(value) {
    return getSubDef(value).type;
  } // create a maps of type string constructors from the input


  function getTypeClassMap(value) {
    const result = {};
    return getSubDefArray(value).reduce((result, sub) => {
      result[sub.name] = sub.type;
      return result;
    }, result);
  } // create an array of type string constructors from the input


  function getTypeClassArray(value) {
    return getSubDefArray(value).map(({
      type
    }) => type);
  }

  function createInt({
    displayName,
    length
  }, Clazz) {
    util.assert(util.isNumber(length), () => `Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);
    return Clazz.with(length, displayName);
  }

  function createHashMap(value, Clazz) {
    const [keyType, valueType] = getTypeClassArray(value);
    return Clazz.with(keyType, valueType);
  }

  const infoMapping = {
    [exports.TypeDefInfo.BTreeMap]: (registry, value) => createHashMap(value, BTreeMap),
    [exports.TypeDefInfo.BTreeSet]: (registry, value) => BTreeSet.with(getSubType(value)),
    [exports.TypeDefInfo.Compact]: (registry, value) => Compact.with(getSubType(value)),
    [exports.TypeDefInfo.DoNotConstruct]: (registry, value) => DoNotConstruct.with(value.displayName || value.type),
    [exports.TypeDefInfo.Enum]: (registry, value) => {
      const subs = getSubDefArray(value);
      return Enum.with(subs.every(({
        type
      }) => type === 'Null') ? subs.reduce((out, {
        index,
        name
      }, count) => {
        out[name] = index || count;
        return out;
      }, {}) : getTypeClassMap(value));
    },
    [exports.TypeDefInfo.HashMap]: (registry, value) => createHashMap(value, HashMap),
    [exports.TypeDefInfo.Int]: (registry, value) => createInt(value, Int),
    // We have circular deps between Linkage & Struct
    [exports.TypeDefInfo.Linkage]: (registry, value) => {
      const type = `Option<${getSubType(value)}>`; // eslint-disable-next-line sort-keys

      const Clazz = Struct.with({
        previous: type,
        next: type
      }); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access

      Clazz.prototype.toRawType = function () {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
        return `Linkage<${this.next.toRawType(true)}>`;
      };

      return Clazz;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [exports.TypeDefInfo.Null]: (registry, _) => Null,
    [exports.TypeDefInfo.Option]: (registry, value) => Option.with(getSubType(value)),
    [exports.TypeDefInfo.Plain]: (registry, value) => registry.getOrUnknown(value.type),
    [exports.TypeDefInfo.Range]: (registry, value) => (value.type.includes('RangeInclusive') ? RangeInclusive : Range).with(getSubType(value)),
    [exports.TypeDefInfo.Result]: (registry, value) => {
      const [Ok, Err] = getTypeClassArray(value); // eslint-disable-next-line @typescript-eslint/no-use-before-define

      return Result.with({
        Err,
        Ok
      });
    },
    [exports.TypeDefInfo.Set]: (registry, value) => {
      const result = {};
      return CodecSet.with(getSubDefArray(value).reduce((result, {
        index,
        name
      }) => {
        result[name] = index;
        return result;
      }, result), value.length);
    },
    [exports.TypeDefInfo.Si]: (registry, value) => getTypeClass(registry, registry.lookup.getTypeDef(value.type)),
    [exports.TypeDefInfo.Struct]: (registry, value) => Struct.with(getTypeClassMap(value), value.alias),
    [exports.TypeDefInfo.Tuple]: (registry, value) => Tuple.with(getTypeClassArray(value)),
    [exports.TypeDefInfo.UInt]: (registry, value) => createInt(value, UInt),
    [exports.TypeDefInfo.Vec]: (registry, value) => {
      const subType = getSubType(value);
      return subType === 'u8' ? Bytes : Vec.with(subType);
    },
    [exports.TypeDefInfo.VecFixed]: (registry, {
      displayName,
      length,
      sub
    }) => {
      util.assert(util.isNumber(length) && !util.isUndefined(sub), 'Expected length & type information for fixed vector');
      const subType = sub.type;
      return subType === 'u8' ? U8aFixed.with(length * 8, displayName) : VecFixed.with(subType, length);
    }
  }; // Returns the type Class for construction

  function getTypeClass(registry, typeDef) {
    let Type = registry.get(typeDef.type);

    if (Type) {
      return Type;
    }

    try {
      Type = infoMapping[typeDef.info](registry, typeDef);
      util.assert(Type, 'No class created'); // don't clobber any existing

      if (!Type.__fallbackType && typeDef.fallbackType) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore ...this is the only place we we actually assign this...
        Type.__fallbackType = typeDef.fallbackType;
      }

      return Type;
    } catch (error) {
      throw new Error(`Unable to construct class from ${util.stringify(typeDef)}: ${error.message}`);
    }
  }
  function createClass(registry, type) {
    return getTypeClass(registry, registry.isLookupType(type) ? registry.lookup.getTypeDef(type) : getTypeDef(type));
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // is much slower, but verifies that we have the correct types defined

  function checkInstance(created, matcher) {
    const u8a = created.toU8a();
    const rawType = created.toRawType();
    const isOk = // full match, all ok
    util.u8aEq(u8a, matcher) || // on a length-prefixed type, just check the actual length
    ['Bytes', 'Text', 'Type'].includes(rawType) && matcher.length === created.length || // when the created is empty and matcher is also empty, let it slide...
    created.isEmpty && matcher.every(v => !v);
    util.assert(isOk, () => `${rawType}:: Decoded input doesn't match input, received ${util.u8aToHex(matcher, 512)} (${matcher.length} bytes), created ${util.u8aToHex(u8a, 512)} (${u8a.length} bytes)`);
  }

  function checkPedantic(created, [value], isPedantic = false) {
    if (isPedantic) {
      if (util.isU8a(value)) {
        checkInstance(created, value);
      } else if (util.isHex(value)) {
        checkInstance(created, util.u8aToU8a(value));
      }
    }
  } // Initializes a type with a value. This also checks for fallbacks and in the cases
  // where isPedantic is specified (storage decoding), also check the format/structure


  function initType(registry, Type, params = [], {
    blockHash,
    isOptional,
    isPedantic
  } = {}) {
    const created = new (isOptional ? Option.with(Type) : Type)(registry, ...params);
    checkPedantic(created, params, isPedantic);

    if (blockHash) {
      created.createdAtHash = createType(registry, 'Hash', blockHash);
    } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


    return created;
  } // An unsafe version of the `createType` below. It's unsafe because the `type`
  // argument here can be any string, which, when it cannot parse, will yield a
  // runtime error.


  function createTypeUnsafe(registry, type, params = [], options = {}) {
    let Clazz = null;
    let firstError = null;

    try {
      Clazz = createClass(registry, type);
      return initType(registry, Clazz, params, options);
    } catch (error) {
      firstError = new Error(`createType(${type}):: ${error.message}`);
    }

    if (Clazz && Clazz.__fallbackType) {
      try {
        Clazz = createClass(registry, Clazz.__fallbackType);
        return initType(registry, Clazz, params, options);
      } catch {// swallow, we will throw the first error again
      }
    }

    throw firstError;
  }
  /**
   * Create an instance of a `type` with a given `params`.
   * @param type - A recognizable string representing the type to create an
   * instance from
   * @param params - The value to instantiate the type with
   */

  function createType(registry, type, ...params) {
    return createTypeUnsafe(registry, type, params);
  }

  function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  const stringIdentity = value => value.toString();

  const INFO_WRAP = ['BTreeMap', 'BTreeSet', 'Compact', 'HashMap', 'Option', 'Result', 'Vec'];
  function paramsNotation(outer, inner, transform = stringIdentity) {
    return `${outer}${inner ? `<${(Array.isArray(inner) ? inner : [inner]).map(transform).join(', ')}>` : ''}`;
  }

  function encodeWithParams(registry, typeDef, outer) {
    const {
      info,
      sub
    } = typeDef;

    switch (info) {
      case exports.TypeDefInfo.BTreeMap:
      case exports.TypeDefInfo.BTreeSet:
      case exports.TypeDefInfo.Compact:
      case exports.TypeDefInfo.HashMap:
      case exports.TypeDefInfo.Linkage:
      case exports.TypeDefInfo.Option:
      case exports.TypeDefInfo.Result:
      case exports.TypeDefInfo.Vec:
        return paramsNotation(outer, sub, p => encodeTypeDef(registry, p));
    }

    throw new Error(`Unable to encode ${util.stringify(typeDef)} with params`);
  }

  function encodeSubTypes(registry, sub, asEnum, extra) {
    const names = sub.map(({
      name
    }) => name);
    util.assert(names.every(n => !!n), () => `Subtypes does not have consistent names, ${names.join(', ')}`);
    const inner = sub.reduce((result, type) => _objectSpread$h(_objectSpread$h({}, result), {}, {
      [type.name]: encodeTypeDef(registry, type)
    }), _objectSpread$h({}, extra));
    return util.stringify(asEnum ? {
      _enum: inner
    } : inner);
  } // We setup a record here to ensure we have comprehensive coverage (any item not covered will result
  // in a compile-time error with the missing index)


  const encoders = {
    [exports.TypeDefInfo.BTreeMap]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'BTreeMap'),
    [exports.TypeDefInfo.BTreeSet]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'BTreeSet'),
    [exports.TypeDefInfo.Compact]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'Compact'),
    [exports.TypeDefInfo.DoNotConstruct]: (registry, {
      displayName,
      lookupIndex,
      lookupName
    }) => `DoNotConstruct<${lookupName || displayName || (util.isUndefined(lookupIndex) ? 'Unknown' : registry.createLookupType(lookupIndex))}>`,
    [exports.TypeDefInfo.Enum]: (registry, {
      sub
    }) => {
      util.assert(sub && Array.isArray(sub), 'Unable to encode Enum type'); // c-like enums have all Null entries
      // TODO We need to take the disciminant into account and auto-add empty entries

      return sub.every(({
        type
      }) => type === 'Null') ? util.stringify({
        _enum: sub.map(({
          name
        }, index) => `${name || `Empty${index}`}`)
      }) : encodeSubTypes(registry, sub, true);
    },
    [exports.TypeDefInfo.HashMap]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'HashMap'),
    [exports.TypeDefInfo.Int]: (registry, {
      length = 32
    }) => `Int<${length}>`,
    [exports.TypeDefInfo.Linkage]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'Linkage'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [exports.TypeDefInfo.Null]: (registry, typeDef) => 'Null',
    [exports.TypeDefInfo.Option]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'Option'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [exports.TypeDefInfo.Plain]: (registry, {
      displayName,
      type
    }) => displayName || type,
    [exports.TypeDefInfo.Range]: (registry, typeDef) => encodeWithParams(registry, typeDef, typeDef.type.includes('RangeInclusive') ? 'RangeInclusive' : 'Range'),
    [exports.TypeDefInfo.Result]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'Result'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [exports.TypeDefInfo.Set]: (registry, {
      length = 8,
      sub
    }) => {
      util.assert(sub && Array.isArray(sub), 'Unable to encode Set type');
      return util.stringify({
        _set: sub.reduce((all, {
          index,
          name
        }, count) => _objectSpread$h(_objectSpread$h({}, all), {}, {
          [`${name || `Unknown${index || count}`}`]: index || count
        }), {
          _bitLength: length || 8
        })
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [exports.TypeDefInfo.Si]: (registry, {
      lookupName,
      type
    }) => lookupName || type,
    [exports.TypeDefInfo.Struct]: (registry, {
      alias,
      sub
    }) => {
      util.assert(sub && Array.isArray(sub), 'Unable to encode Struct type');
      return encodeSubTypes(registry, sub, false, _objectSpread$h({}, alias ? {
        _alias: [...alias.entries()].reduce((all, [k, v]) => _objectSpread$h(_objectSpread$h({}, all), {}, {
          [k]: v
        }), {})
      } : {}));
    },
    [exports.TypeDefInfo.Tuple]: (registry, {
      sub
    }) => {
      util.assert(sub && Array.isArray(sub), 'Unable to encode Tuple type');
      return `(${sub.map(type => encodeTypeDef(registry, type)).join(',')})`;
    },
    [exports.TypeDefInfo.UInt]: (registry, {
      length = 32
    }) => `UInt<${length}>`,
    [exports.TypeDefInfo.Vec]: (registry, typeDef) => encodeWithParams(registry, typeDef, 'Vec'),
    [exports.TypeDefInfo.VecFixed]: (registry, {
      length,
      sub
    }) => {
      util.assert(util.isNumber(length) && !util.isUndefined(sub) && !Array.isArray(sub), 'Unable to encode VecFixed type');
      return `[${sub.type};${length}]`;
    }
  };

  function encodeType(registry, typeDef, withLookup = true) {
    return withLookup && typeDef.lookupName ? typeDef.lookupName : encoders[typeDef.info](registry, typeDef);
  }

  function encodeTypeDef(registry, typeDef) {
    // In the case of contracts we do have the unfortunate situation where the displayName would
    // refer to "Option" when it is an option. For these, string it out, only using when actually
    // not a top-level element to be used
    return typeDef.displayName && !INFO_WRAP.some(i => typeDef.displayName === i) ? typeDef.displayName : encodeType(registry, typeDef);
  }
  function withTypeString(registry, typeDef) {
    return _objectSpread$h(_objectSpread$h({}, typeDef), {}, {
      type: encodeType(registry, typeDef, false)
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  const emptyCheck = {
    extrinsic: {},
    payload: {}
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const axia = {
    LimitParathreadCommits: emptyCheck,
    OnlyStakingAndClaims: emptyCheck,
    PrevalidateAttests: emptyCheck,
    RestrictFunctionality: emptyCheck,
    TransactionCallFilter: emptyCheck,
    ValidateDoubleVoteReports: emptyCheck
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const shell = {
    DisallowSigned: emptyCheck
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  const statemint = {
    ChargeAssetTxPayment: {
      extrinsic: {
        tip: 'Compact<Balance>',
        // eslint-disable-next-line sort-keys
        assetId: 'Option<AssetId>'
      },
      payload: {}
    }
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const CheckMortality = {
    extrinsic: {
      era: 'ExtrinsicEra'
    },
    payload: {
      blockHash: 'Hash'
    }
  };
  const substrate$1 = {
    ChargeTransactionPayment: {
      extrinsic: {
        tip: 'Compact<Balance>'
      },
      payload: {}
    },
    CheckBlockGasLimit: emptyCheck,
    CheckEra: CheckMortality,
    CheckGenesis: {
      extrinsic: {},
      payload: {
        genesisHash: 'Hash'
      }
    },
    CheckMortality,
    CheckNonce: {
      extrinsic: {
        nonce: 'Compact<Index>'
      },
      payload: {}
    },
    CheckSpecVersion: {
      extrinsic: {},
      payload: {
        specVersion: 'u32'
      }
    },
    CheckTxVersion: {
      extrinsic: {},
      payload: {
        transactionVersion: 'u32'
      }
    },
    CheckVersion: {
      extrinsic: {},
      payload: {
        specVersion: 'u32'
      }
    },
    CheckWeight: emptyCheck,
    LockStakingStatus: emptyCheck,
    ValidateEquivocationReport: emptyCheck
  };

  function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  // we define the extra fields not as a Tuple, but rather as a struct so they can be named. These will be expanded
  // into the various fields when added to the payload (we only support V4 onwards with these, V3 and earlier are
  // deemed fixed and non-changeable)

  const allExtensions = _objectSpread$g(_objectSpread$g(_objectSpread$g(_objectSpread$g({}, substrate$1), axia), shell), statemint); // the v4 signed extensions prior to the point of exposing these to the metadata.
  // This may not match 100% with the current defaults and are used when not specified
  // in the metadata (which is for very old chains). The order is important here, as
  // applied by default

  const fallbackExtensions = ['CheckVersion', 'CheckGenesis', 'CheckEra', 'CheckNonce', 'CheckWeight', 'ChargeTransactionPayment', 'CheckBlockGasLimit'];
  function findUnknownExtensions(extensions, userExtensions = {}) {
    const names = [...Object.keys(allExtensions), ...Object.keys(userExtensions)];
    return extensions.filter(key => !names.includes(key));
  }
  function expandExtensionTypes(extensions, type, userExtensions = {}) {
    return extensions // Always allow user extensions first - these should provide overrides
    .map(key => userExtensions[key] || allExtensions[key]).filter(info => !!info).reduce((result, info) => _objectSpread$g(_objectSpread$g({}, result), info[type]), {});
  }

  function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /** @internal */
  function decodeEvent(registry, value) {
    if (!value || !value.length) {
      return {
        DataType: Null
      };
    }

    const index = value.subarray(0, 2);
    return {
      DataType: registry.findMetaEvent(index),
      value: {
        data: value.subarray(2),
        index
      }
    };
  }
  /**
   * @name GenericEventData
   * @description
   * Wrapper for the actual data that forms part of an [[Event]]
   */


  var _meta = /*#__PURE__*/_classPrivateFieldKey("meta");

  var _method = /*#__PURE__*/_classPrivateFieldKey("method");

  var _section = /*#__PURE__*/_classPrivateFieldKey("section");

  var _typeDef = /*#__PURE__*/_classPrivateFieldKey("typeDef");

  class GenericEventData extends Tuple {
    constructor(registry, value, meta, section = '<unknown>', method = '<unknown>') {
      const fields = (meta === null || meta === void 0 ? void 0 : meta.fields) || [];
      super(registry, fields.map(({
        type
      }) => registry.createLookupType(type)), value);
      Object.defineProperty(this, _meta, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _method, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _section, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _typeDef, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldBase(this, _meta)[_meta] = meta;
      _classPrivateFieldBase(this, _method)[_method] = method;
      _classPrivateFieldBase(this, _section)[_section] = section;
      _classPrivateFieldBase(this, _typeDef)[_typeDef] = fields.map(({
        type
      }) => registry.lookup.getTypeDef(type));
    }
    /**
     * @description The wrapped [[EventMetadata]]
     */


    get meta() {
      return _classPrivateFieldBase(this, _meta)[_meta];
    }
    /**
     * @description The method as a string
     */


    get method() {
      return _classPrivateFieldBase(this, _method)[_method];
    }
    /**
     * @description The section as a string
     */


    get section() {
      return _classPrivateFieldBase(this, _section)[_section];
    }
    /**
     * @description The [[TypeDef]] for this event
     */


    get typeDef() {
      return _classPrivateFieldBase(this, _typeDef)[_typeDef];
    }

  }
  /**
   * @name GenericEvent
   * @description
   * A representation of a system event. These are generated via the [[Metadata]] interfaces and
   * specific to a specific Substrate runtime
   */

  class GenericEvent extends Struct {
    // Currently we _only_ decode from Uint8Array, since we expect it to
    // be used via EventRecord
    constructor(registry, _value) {
      const {
        DataType,
        value
      } = decodeEvent(registry, _value);
      super(registry, {
        index: 'EventId',
        // eslint-disable-next-line sort-keys
        data: DataType
      }, value);
    }
    /**
     * @description The wrapped [[EventData]]
     */


    get data() {
      return this.get('data');
    }
    /**
     * @description The [[EventId]], identifying the raw event
     */


    get index() {
      return this.get('index');
    }
    /**
     * @description The [[EventMetadata]] with the documentation
     */


    get meta() {
      return this.data.meta;
    }
    /**
     * @description The method string identifying the event
     */


    get method() {
      return this.data.method;
    }
    /**
     * @description The section string identifying the event
     */


    get section() {
      return this.data.section;
    }
    /**
     * @description The [[TypeDef]] for the event
     */


    get typeDef() {
      return this.data.typeDef;
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExpanded) {
      return _objectSpread$f(_objectSpread$f({
        method: this.method,
        section: this.section
      }, isExpanded ? {
        docs: this.meta.docs.map(d => d.toString())
      } : {}), super.toHuman(isExpanded));
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /**
   * @name Base
   * @description A type extends the Base class, when it holds a value
   */
  class Base {
    constructor(registry, value) {
      this.registry = void 0;
      this.createdAtHash = void 0;
      this._raw = void 0;
      this.registry = registry;
      this._raw = value;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description returns a hash of the contents
     */


    get hash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description Checks if the value is an empty value
     */


    get isEmpty() {
      return this._raw.isEmpty;
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return this._raw.eq(other);
    }
    /**
     * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
     */


    toHex(isLe) {
      return this._raw.toHex(isLe);
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return this._raw.toHuman(isExtended);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this._raw.toJSON();
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this._raw.toString();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return this._raw.toU8a(isBare);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Base';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  const BIT_SIGNED = 0b10000000;
  const BIT_UNSIGNED = 0;
  const EMPTY_U8A$1 = new Uint8Array();
  const DEFAULT_VERSION = 4;
  const IMMORTAL_ERA = new Uint8Array([0]);
  const UNMASK_VERSION = 0b01111111;

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const EXTRINSIC_VERSION = 4;

  /**
   * @name GenericExtrinsicV4
   * @description
   * The third generation of compact extrinsics
   */
  class GenericExtrinsicV4 extends Struct {
    constructor(registry, value, {
      isSigned
    } = {}) {
      super(registry, {
        signature: 'ExtrinsicSignatureV4',
        // eslint-disable-next-line sort-keys
        method: 'Call'
      }, GenericExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
    }
    /** @internal */


    static decodeExtrinsic(registry, value, isSigned = false) {
      if (value instanceof GenericExtrinsicV4) {
        return value;
      } else if (value instanceof registry.createClass('Call')) {
        return {
          method: value
        };
      } else if (util.isU8a(value)) {
        // here we decode manually since we need to pull through the version information
        const signature = registry.createType('ExtrinsicSignatureV4', value, {
          isSigned
        });
        const method = registry.createType('Call', value.subarray(signature.encodedLength));
        return {
          method,
          signature
        };
      }

      return value || {};
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */


    get method() {
      return this.get('method');
    }
    /**
     * @description The [[ExtrinsicSignatureV4]]
     */


    get signature() {
      return this.get('signature');
    }
    /**
     * @description The version for the signature
     */


    get version() {
      return EXTRINSIC_VERSION;
    }
    /**
     * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
     */


    addSignature(signer, signature, payload) {
      this.signature.addSignature(signer, signature, payload);
      return this;
    }
    /**
     * @description Sign the extrinsic with a specific keypair
     */


    sign(account, options) {
      this.signature.sign(this.method, account, options);
      return this;
    }
    /**
     * @describe Adds a fake signature to the extrinsic
     */


    signFake(signer, options) {
      this.signature.signFake(this.method, signer, options);
      return this;
    }

  }

  function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const VERSIONS$1 = ['ExtrinsicUnknown', // v0 is unknown
  'ExtrinsicUnknown', 'ExtrinsicUnknown', 'ExtrinsicUnknown', 'ExtrinsicV4'];

  class ExtrinsicBase extends Base {
    /**
     * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
     */
    get args() {
      return this.method.args;
    }
    /**
     * @description The argument definitions, compatible with [[Call]]
     */


    get argsDef() {
      return this.method.argsDef;
    }
    /**
     * @description The actual `[sectionIndex, methodIndex]` as used in the Call
     */


    get callIndex() {
      return this.method.callIndex;
    }
    /**
     * @description The actual data for the Call
     */


    get data() {
      return this.method.data;
    }
    /**
     * @description The era for this extrinsic
     */


    get era() {
      return this._raw.signature.era;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.toU8a().length;
    }
    /**
     * @description `true` id the extrinsic is signed
     */


    get isSigned() {
      return this._raw.signature.isSigned;
    }
    /**
     * @description The length of the actual data, excluding prefix
     */


    get length() {
      return this.toU8a(true).length;
    }
    /**
     * @description The [[FunctionMetadataLatest]] that describes the extrinsic
     */


    get meta() {
      return this.method.meta;
    }
    /**
     * @description The [[Call]] this extrinsic wraps
     */


    get method() {
      return this._raw.method;
    }
    /**
     * @description The nonce for this extrinsic
     */


    get nonce() {
      return this._raw.signature.nonce;
    }
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */


    get signature() {
      return this._raw.signature.signature;
    }
    /**
     * @description The [[Address]] that signed
     */


    get signer() {
      return this._raw.signature.signer;
    }
    /**
     * @description Forwards compat
     */


    get tip() {
      return this._raw.signature.tip;
    }
    /**
     * @description Returns the raw transaction version (not flagged with signing information)
    */


    get type() {
      return this._raw.version;
    }
    /**
     * @description Returns the encoded version flag
    */


    get version() {
      return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
    }
    /**
     * @description Checks if the source matches this in type
     */


    is(other) {
      return this.method.is(other);
    }

  }
  /**
   * @name GenericExtrinsic
   * @description
   * Representation of an Extrinsic in the system. It contains the actual call,
   * (optional) signature and encodes with an actual length prefix
   *
   * {@link https://github.com/axia-tech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
   *
   * Can be:
   * - signed, to create a transaction
   * - left as is, to create an inherent
   */


  class GenericExtrinsic extends ExtrinsicBase {
    constructor(registry, value, {
      version
    } = {}) {
      super(registry, GenericExtrinsic._decodeExtrinsic(registry, value, version));
    }
    /** @internal */


    static _newFromValue(registry, value, version) {
      if (value instanceof GenericExtrinsic) {
        return value._raw;
      }

      const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
      const type = VERSIONS$1[version & UNMASK_VERSION] || VERSIONS$1[0]; // we cast here since the VERSION definition is incredibly broad - we don't have a
      // slice for "only add extrinsic types", and more string definitions become unwieldy

      return registry.createType(type, value, {
        isSigned,
        version
      });
    }
    /** @internal */


    static _decodeExtrinsic(registry, value, version = DEFAULT_VERSION) {
      if (util.isU8a(value) || Array.isArray(value) || util.isHex(value)) {
        return GenericExtrinsic._decodeU8a(registry, util.u8aToU8a(value), version);
      } else if (value instanceof registry.createClass('Call')) {
        return GenericExtrinsic._newFromValue(registry, {
          method: value
        }, version);
      }

      return GenericExtrinsic._newFromValue(registry, value, version);
    }
    /** @internal */


    static _decodeU8a(registry, value, version) {
      if (!value.length) {
        return GenericExtrinsic._newFromValue(registry, new Uint8Array(), version);
      }

      const [offset, length] = util.compactFromU8a(value);
      const total = offset + length.toNumber();
      util.assert(total <= value.length, () => `Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);
      const data = value.subarray(offset, total);
      return GenericExtrinsic._newFromValue(registry, data.subarray(1), data[0]);
    }
    /**
     * @description Injects an already-generated signature into the extrinsic
     */


    addSignature(signer, signature, payload) {
      this._raw.addSignature(signer, signature, payload);

      return this;
    }
    /**
     * @description Sign the extrinsic with a specific keypair
     */


    sign(account, options) {
      this._raw.sign(account, options);

      return this;
    }
    /**
     * @describe Adds a fake signature to the extrinsic
     */


    signFake(signer, options) {
      this._raw.signFake(signer, options);

      return this;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex(isBare) {
      return util.u8aToHex(this.toU8a(isBare));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExpanded) {
      return _objectSpread$e({
        isSigned: this.isSigned,
        method: this.method.toHuman(isExpanded)
      }, this.isSigned ? {
        era: this.era.toHuman(isExpanded),
        nonce: this.nonce.toHuman(isExpanded),
        signature: this.signature.toHex(),
        signer: this.signer.toHuman(isExpanded),
        tip: this.tip.toHuman(isExpanded)
      } : {});
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toHex();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Extrinsic';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value is not length-prefixed
     */


    toU8a(isBare) {
      // we do not apply bare to the internal values, rather this only determines out length addition,
      // where we strip all lengths this creates an extrinsic that cannot be decoded
      const encoded = util.u8aConcat(new Uint8Array([this.version]), this._raw.toU8a());
      return isBare ? encoded : util.compactAddLength(encoded);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function getTrailingZeros(period) {
    const binary = period.toString(2);
    let index = 0;

    while (binary[binary.length - 1 - index] === '0') {
      index++;
    }

    return index;
  }
  /**
   * @name ImmortalEra
   * @description
   * The ImmortalEra for an extrinsic
   */


  class ImmortalEra extends Raw {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(registry, value) {
      // For immortals, we always provide the known value (i.e. treated as a
      // constant no matter how it is constructed - it is a fixed structure)
      super(registry, IMMORTAL_ERA);
    }

  }
  /**
   * @name MortalEra
   * @description
   * The MortalEra for an extrinsic, indicating period and phase
   */

  class MortalEra extends Tuple {
    constructor(registry, value) {
      super(registry, {
        period: u64,
        phase: u64
      }, MortalEra._decodeMortalEra(registry, value));
    }
    /** @internal */


    static _decodeMortalEra(registry, value) {
      if (!value) {
        return [new u64(registry), new u64(registry)];
      } else if (util.isU8a(value) || util.isHex(value) || Array.isArray(value)) {
        return MortalEra._decodeMortalU8a(registry, util.u8aToU8a(value));
      } else if (util.isObject(value)) {
        return MortalEra._decodeMortalObject(registry, value);
      }

      throw new Error('Invalid data passed to Mortal era');
    }
    /** @internal */


    static _decodeMortalObject(registry, value) {
      const {
        current,
        period
      } = value;
      let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));
      calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);
      const phase = current % calPeriod;
      const quantizeFactor = Math.max(calPeriod >> 12, 1);
      const quantizedPhase = phase / quantizeFactor * quantizeFactor;
      return [new u64(registry, calPeriod), new u64(registry, quantizedPhase)];
    }
    /** @internal */


    static _decodeMortalU8a(registry, value) {
      if (value.length === 0) {
        return [new u64(registry), new u64(registry)];
      }

      const first = util.u8aToBn(value.subarray(0, 1)).toNumber();
      const second = util.u8aToBn(value.subarray(1, 2)).toNumber();
      const encoded = first + (second << 8);
      const period = 2 << encoded % (1 << 4);
      const quantizeFactor = Math.max(period >> 12, 1);
      const phase = (encoded >> 4) * quantizeFactor;
      util.assert(period >= 4 && phase < period, 'Invalid data passed to Mortal era');
      return [new u64(registry, period), new u64(registry, phase)];
    }
    /**
     * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
     */


    get encodedLength() {
      return 2;
    }
    /**
     * @description The period of this Mortal wraps as a [[U64]]
     */


    get period() {
      return this[0];
    }
    /**
     * @description The phase of this Mortal wraps as a [[U64]]
     */


    get phase() {
      return this[1];
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return {
        period: util.formatNumber(this.period),
        phase: util.formatNumber(this.phase)
      };
    }
    /**
     * @description Returns a JSON representation of the actual value
     */


    toJSON() {
      return this.toHex();
    }
    /**
     * @description Encodes the value as a Uint8Array as per the axia-codec specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     * Period and phase are encoded:
     *   - The period of validity from the block hash found in the signing material.
     *   - The phase in the period that this transaction's lifetime begins (and, importantly,
     *     implies which block hash is included in the signature material). If the `period` is
     *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
     *     `period` is.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars


    toU8a(isBare) {
      const period = this.period.toNumber();
      const phase = this.phase.toNumber();
      const quantizeFactor = Math.max(period >> 12, 1);
      const trailingZeros = getTrailingZeros(period);
      const encoded = Math.min(15, Math.max(1, trailingZeros - 1)) + (phase / quantizeFactor << 4);
      const first = encoded >> 8;
      const second = encoded & 0xff;
      return new Uint8Array([second, first]);
    }
    /**
     * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
     */


    birth(current) {
      // FIXME No toNumber() here
      return Math.floor((Math.max(util.bnToBn(current).toNumber(), this.phase.toNumber()) - this.phase.toNumber()) / this.period.toNumber()) * this.period.toNumber() + this.phase.toNumber();
    }
    /**
     * @description Get the block number of the first block at which the era has ended.
     */


    death(current) {
      // FIXME No toNumber() here
      return this.birth(current) + this.period.toNumber();
    }

  }
  /**
   * @name GenericExtrinsicEra
   * @description
   * The era for an extrinsic, indicating either a mortal or immortal extrinsic
   */

  class GenericExtrinsicEra extends Enum {
    constructor(registry, value) {
      super(registry, {
        ImmortalEra,
        MortalEra
      }, GenericExtrinsicEra._decodeExtrinsicEra(value));
    }
    /** @internal */
    // eslint-disable-next-line @typescript-eslint/ban-types


    static _decodeExtrinsicEra(value = new Uint8Array()) {
      if (!value) {
        return new Uint8Array([0]);
      } else if (value instanceof GenericExtrinsicEra) {
        return GenericExtrinsicEra._decodeExtrinsicEra(value.toU8a());
      } else if (util.isHex(value)) {
        return GenericExtrinsicEra._decodeExtrinsicEra(util.hexToU8a(value));
      } else if (util.isU8a(value)) {
        return !value.length || value[0] === 0 ? new Uint8Array([0]) : new Uint8Array([1, value[0], value[1]]);
      } else if (util.isObject(value)) {
        const entries = Object.entries(value).map(([k, v]) => [k.toLowerCase(), v]);
        const mortal = entries.find(([k]) => k.toLowerCase() === 'mortalera');
        const immortal = entries.find(([k]) => k.toLowerCase() === 'immortalera'); // this is to de-serialize from JSON

        return mortal ? {
          MortalEra: mortal[1]
        } : immortal ? {
          ImmortalEra: immortal[1]
        } : {
          MortalEra: value
        };
      }

      throw new Error('Invalid data passed to Era');
    }
    /**
     * @description Override the encoded length method
     */


    get encodedLength() {
      return this.isImmortalEra ? this.asImmortalEra.encodedLength : this.asMortalEra.encodedLength;
    }
    /**
     * @description Returns the item as a [[ImmortalEra]]
     */


    get asImmortalEra() {
      util.assert(this.isImmortalEra, () => `Cannot convert '${this.type}' via asImmortalEra`);
      return this.value;
    }
    /**
     * @description Returns the item as a [[MortalEra]]
     */


    get asMortalEra() {
      util.assert(this.isMortalEra, () => `Cannot convert '${this.type}' via asMortalEra`);
      return this.value;
    }
    /**
     * @description `true` if Immortal
     */


    get isImmortalEra() {
      return this.index === 0;
    }
    /**
     * @description `true` if Mortal
     */


    get isMortalEra() {
      return this.index > 0;
    }
    /**
     * @description Encodes the value as a Uint8Array as per the axia-codec specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return this.isMortalEra ? this.asMortalEra.toU8a(isBare) : this.asImmortalEra.toU8a(isBare);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const VERSIONS = ['ExtrinsicPayloadUnknown', // v0 is unknown
  'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadUnknown', 'ExtrinsicPayloadV4'];
  /**
   * @name GenericExtrinsicPayload
   * @description
   * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
   * on the contents included
   */

  class GenericExtrinsicPayload extends Base {
    constructor(registry, value, {
      version
    } = {}) {
      super(registry, GenericExtrinsicPayload.decodeExtrinsicPayload(registry, value, version));
    }
    /** @internal */


    static decodeExtrinsicPayload(registry, value, version = DEFAULT_VERSION) {
      if (value instanceof GenericExtrinsicPayload) {
        return value._raw;
      }

      return registry.createType(VERSIONS[version] || VERSIONS[0], value, {
        version
      });
    }
    /**
     * @description The block [[Hash]] the signature applies to (mortal/immortal)
     */


    get blockHash() {
      return this._raw.blockHash;
    }
    /**
     * @description The [[ExtrinsicEra]]
     */


    get era() {
      return this._raw.era;
    }
    /**
     * @description The genesis block [[Hash]] the signature applies to
     */


    get genesisHash() {
      // NOTE only v3+
      return this._raw.genesisHash || this.registry.createType('Hash');
    }
    /**
     * @description The [[Raw]] contained in the payload
     */


    get method() {
      return this._raw.method;
    }
    /**
     * @description The [[Index]]
     */


    get nonce() {
      return this._raw.nonce;
    }
    /**
     * @description The specVersion as a [[u32]] for this payload
     */


    get specVersion() {
      // NOTE only v3+
      return this._raw.specVersion || this.registry.createType('u32');
    }
    /**
     * @description The [[Balance]]
     */


    get tip() {
      // NOTE from v2+
      return this._raw.tip || this.registry.createType('Compact<Balance>');
    }
    /**
     * @description The transaction version as a [[u32]] for this payload
     */


    get transactionVersion() {
      // NOTE only v4+
      return this._raw.transactionVersion || this.registry.createType('u32');
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return this._raw.eq(other);
    }
    /**
     * @description Sign the payload with the keypair
     */


    sign(signerPair) {
      const signature = this._raw.sign(signerPair); // This is extensible, so we could quite readily extend to send back extra
      // information, such as for instance the payload, i.e. `payload: this.toHex()`
      // For the case here we sign via the extrinsic, we ignore the return, so generally
      // this is applicable for external signing


      return {
        signature: util.u8aToHex(signature)
      };
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExtended) {
      return this._raw.toHuman(isExtended);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toHex();
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this.toHex();
    }
    /**
     * @description Returns a serialized u8a form
     */


    toU8a(isBare) {
      // call our parent, with only the method stripped
      return super.toU8a(isBare ? {
        method: true
      } : false);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name GenericExtrinsicPayloadUnknown
   * @description
   * A default handler for payloads where the version is not known (default throw)
   */

  class GenericExtrinsicPayloadUnknown extends Struct {
    constructor(registry, value, {
      version = 0
    } = {}) {
      super(registry, {});
      throw new Error(`Unsupported extrinsic payload version ${version}`);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * @name GenericExtrinsicUnknown
   * @description
   * A default handler for extrinsics where the version is not known (default throw)
   */

  class GenericExtrinsicUnknown extends Struct {
    constructor(registry, value, {
      isSigned = false,
      version = 0
    } = {}) {
      super(registry, {});
      throw new Error(`Unsupported ${isSigned ? '' : 'un'}signed extrinsic version ${version & UNMASK_VERSION}`);
    }

  }

  function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const knownTypes = {
    address: 'Address',
    blockHash: 'Hash',
    blockNumber: 'BlockNumber',
    era: 'ExtrinsicEra',
    genesisHash: 'Hash',
    method: 'Call',
    nonce: 'Compact<Index>',
    runtimeVersion: 'RuntimeVersion',
    signedExtensions: 'Vec<Text>',
    tip: 'Compact<Balance>',
    version: 'u8'
  };
  /**
   * @name GenericSignerPayload
   * @description
   * A generic signer payload that can be used for serialization between API and signer
   */

  class GenericSignerPayload extends Struct {
    constructor(registry, value) {
      const extensionTypes = _objectSpread$d(_objectSpread$d({}, registry.getSignedExtensionTypes()), registry.getSignedExtensionExtra());

      super(registry, _objectSpread$d(_objectSpread$d({}, extensionTypes), knownTypes), value); // add all extras that are not in the base types

      this._extraTypes = void 0;
      this._extraTypes = Object.entries(extensionTypes).reduce((map, [key, type]) => {
        if (!knownTypes[key]) {
          map[key] = type;
        }

        return map;
      }, {});
    }

    get address() {
      return this.get('address');
    }

    get blockHash() {
      return this.get('blockHash');
    }

    get blockNumber() {
      return this.get('blockNumber');
    }

    get era() {
      return this.get('era');
    }

    get genesisHash() {
      return this.get('genesisHash');
    }

    get method() {
      return this.get('method');
    }

    get nonce() {
      return this.get('nonce');
    }

    get runtimeVersion() {
      return this.get('runtimeVersion');
    }

    get signedExtensions() {
      return this.get('signedExtensions');
    }

    get tip() {
      return this.get('tip');
    }

    get version() {
      return this.get('version');
    }
    /**
     * @description Creates an representation of the structure as an ISignerPayload JSON
     */


    toPayload() {
      return _objectSpread$d(_objectSpread$d({}, Object.keys(this._extraTypes).reduce((map, key) => {
        map[key] = this.get(key).toHex();
        return map;
      }, {})), {}, {
        // the known defaults as managed explicitly and has different
        // formatting in cases, e.g. we mostly expose a hex format here
        address: this.address.toString(),
        blockHash: this.blockHash.toHex(),
        blockNumber: this.blockNumber.toHex(),
        era: this.era.toHex(),
        genesisHash: this.genesisHash.toHex(),
        method: this.method.toHex(),
        nonce: this.nonce.toHex(),
        signedExtensions: this.signedExtensions.map(e => e.toString()),
        specVersion: this.runtimeVersion.specVersion.toHex(),
        tip: this.tip.toHex(),
        transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
        version: this.version.toNumber()
      });
    }
    /**
     * @description Creates a representation of the payload in raw Exrinsic form
     */


    toRaw() {
      const payload = this.toPayload();
      const data = util.u8aToHex(this.registry.createType('ExtrinsicPayload', payload, {
        version: payload.version
      }) // NOTE Explicitly pass the bare flag so the method is encoded un-prefixed (non-decodable, for signing only)
      .toU8a({
        method: true
      }));
      return {
        address: payload.address,
        data,
        type: 'payload'
      };
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // a helper function for both types of payloads, Raw and metadata-known
  function sign(registry, signerPair, u8a, options) {
    const encoded = u8a.length > 256 ? registry.hash(u8a) : u8a;
    return signerPair.sign(encoded, options);
  }

  function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  /**
   * @name GenericExtrinsicPayloadV4
   * @description
   * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
   * on the contents included
   */

  var _signOptions = /*#__PURE__*/_classPrivateFieldKey("signOptions");

  class GenericExtrinsicPayloadV4 extends Struct {
    constructor(registry, value) {
      super(registry, _objectSpread$c(_objectSpread$c({
        method: 'Bytes'
      }, registry.getSignedExtensionTypes()), registry.getSignedExtensionExtra()), value); // Do detection for the type of extrinsic, in the case of MultiSignature this is an
      // enum, in the case of AnySignature, this is a Hash only (may be 64 or 65 bytes)

      Object.defineProperty(this, _signOptions, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldBase(this, _signOptions)[_signOptions] = {
        withType: registry.createType('ExtrinsicSignature') instanceof Enum
      };
    }
    /**
     * @description The block [[Hash]] the signature applies to (mortal/immortal)
     */


    get blockHash() {
      return this.get('blockHash');
    }
    /**
     * @description The [[ExtrinsicEra]]
     */


    get era() {
      return this.get('era');
    }
    /**
     * @description The genesis [[Hash]] the signature applies to (mortal/immortal)
     */


    get genesisHash() {
      return this.get('genesisHash');
    }
    /**
     * @description The [[Bytes]] contained in the payload
     */


    get method() {
      return this.get('method');
    }
    /**
     * @description The [[Index]]
     */


    get nonce() {
      return this.get('nonce');
    }
    /**
     * @description The specVersion for this signature
     */


    get specVersion() {
      return this.get('specVersion');
    }
    /**
     * @description The tip [[Balance]]
     */


    get tip() {
      return this.get('tip');
    }
    /**
     * @description The transactionVersion for this signature
     */


    get transactionVersion() {
      return this.get('transactionVersion');
    }
    /**
     * @description Sign the payload with the keypair
     */


    sign(signerPair) {
      // NOTE The `toU8a({ method: true })` argument is absolutely critical - we don't want the method (Bytes)
      // to have the length prefix included. This means that the data-as-signed is un-decodable,
      // but is also doesn't need the extra information, only the pure data (and is not decoded)
      // ... The same applies to V1..V3, if we have a V5, carry move this comment to latest
      return sign(this.registry, signerPair, this.toU8a({
        method: true
      }), _classPrivateFieldBase(this, _signOptions)[_signOptions]);
    }

  }

  function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const FAKE_NONE = new Uint8Array();
  const FAKE_SOME = new Uint8Array([1]);

  function toAddress(registry, address) {
    return registry.createType('Address', util.isU8a(address) ? util.u8aToHex(address) : address);
  }
  /**
   * @name GenericExtrinsicSignatureV4
   * @description
   * A container for the [[Signature]] associated with a specific [[Extrinsic]]
   */


  var _fakePrefix = /*#__PURE__*/_classPrivateFieldKey("fakePrefix");

  class GenericExtrinsicSignatureV4 extends Struct {
    constructor(registry, value, {
      isSigned
    } = {}) {
      super(registry, _objectSpread$b({
        signer: 'Address',
        // eslint-disable-next-line sort-keys
        signature: 'ExtrinsicSignature'
      }, registry.getSignedExtensionTypes()), GenericExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned));
      Object.defineProperty(this, _fakePrefix, {
        writable: true,
        value: void 0
      });
      _classPrivateFieldBase(this, _fakePrefix)[_fakePrefix] = registry.createType('ExtrinsicSignature') instanceof Enum ? FAKE_SOME : FAKE_NONE;
    }
    /** @internal */


    static decodeExtrinsicSignature(value, isSigned = false) {
      if (!value) {
        return EMPTY_U8A$1;
      } else if (value instanceof GenericExtrinsicSignatureV4) {
        return value;
      }

      return isSigned ? value : EMPTY_U8A$1;
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      return this.isSigned ? super.encodedLength : 0;
    }
    /**
     * @description `true` if the signature is valid
     */


    get isSigned() {
      return !this.signature.isEmpty;
    }
    /**
     * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
     */


    get era() {
      return this.get('era');
    }
    /**
     * @description The [[Index]] for the signature
     */


    get nonce() {
      return this.get('nonce');
    }
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */


    get signature() {
      // the second case here is when we don't have an enum signature, treat as raw
      return this.multiSignature.value || this.multiSignature;
    }
    /**
     * @description The raw [[ExtrinsicSignature]]
     */


    get multiSignature() {
      return this.get('signature');
    }
    /**
     * @description The [[Address]] that signed
     */


    get signer() {
      return this.get('signer');
    }
    /**
     * @description The [[Balance]] tip
     */


    get tip() {
      return this.get('tip');
    }

    _injectSignature(signer, signature, {
      era,
      nonce,
      tip
    }) {
      this.set('era', era);
      this.set('nonce', nonce);
      this.set('signer', signer);
      this.set('signature', signature);
      this.set('tip', tip);
      return this;
    }
    /**
     * @description Adds a raw signature
     */


    addSignature(signer, signature, payload) {
      return this._injectSignature(toAddress(this.registry, signer), this.registry.createType('ExtrinsicSignature', signature), new GenericExtrinsicPayloadV4(this.registry, payload));
    }
    /**
     * @description Creates a payload from the supplied options
     */


    createPayload(method, {
      blockHash,
      era,
      genesisHash,
      nonce,
      runtimeVersion: {
        specVersion,
        transactionVersion
      },
      tip
    }) {
      return new GenericExtrinsicPayloadV4(this.registry, {
        blockHash,
        era: era || IMMORTAL_ERA,
        genesisHash,
        method: method.toHex(),
        nonce,
        specVersion,
        tip: tip || 0,
        transactionVersion: transactionVersion || 0
      });
    }
    /**
     * @description Generate a payload and applies the signature from a keypair
     */


    sign(method, account, options) {
      util.assert(account && account.addressRaw, () => `Expected a valid keypair for signing, found ${util.stringify(account)}`);
      const signer = toAddress(this.registry, account.addressRaw);
      const payload = this.createPayload(method, options);
      const signature = this.registry.createType('ExtrinsicSignature', payload.sign(account));
      return this._injectSignature(signer, signature, payload);
    }
    /**
     * @description Generate a payload and applies a fake signature
     */


    signFake(method, address, options) {
      util.assert(address, () => `Expected a valid address for signing, found ${util.stringify(address)}`);
      const signer = toAddress(this.registry, address);
      const payload = this.createPayload(method, options);
      const signature = this.registry.createType('ExtrinsicSignature', util.u8aConcat(_classPrivateFieldBase(this, _fakePrefix)[_fakePrefix], new Uint8Array(64).fill(0x42)));
      return this._injectSignature(signer, signature, payload);
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      return this.isSigned ? super.toU8a(isBare) : EMPTY_U8A$1;
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeAccountId$1(value) {
    if (util.isU8a(value) || Array.isArray(value)) {
      return util.u8aToU8a(value);
    } else if (util.isHex(value) || utilCrypto.isEthereumAddress(value)) {
      return util.hexToU8a(value);
    } else if (util.isString(value)) {
      return util.u8aToU8a(value);
    }

    return value;
  }
  /**
   * @name GenericEthereumAccountId
   * @description
   * A wrapper around an Ethereum-compatible AccountId. Since we are dealing with
   * underlying addresses (20 bytes in length), we extend from U8aFixed which is
   * just a Uint8Array wrapper with a fixed length.
   */


  class GenericEthereumAccountId extends U8aFixed {
    constructor(registry, value = new Uint8Array()) {
      super(registry, decodeAccountId$1(value), 160);
    }

    static encode(value) {
      return utilCrypto.ethereumEncode(value);
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return super.eq(decodeAccountId$1(other));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toString();
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return GenericEthereumAccountId.encode(this);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'AccountId';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const PREFIX_1BYTE = 0xef;
  const PREFIX_2BYTE = 0xfc;
  const PREFIX_4BYTE = 0xfd;
  const PREFIX_8BYTE = 0xfe;
  const MAX_1BYTE = new util.BN(PREFIX_1BYTE);
  const MAX_2BYTE = new util.BN(1).shln(16);
  const MAX_4BYTE = new util.BN(1).shln(32);
  /** @internal */

  function decodeAccountIndex(value) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (value instanceof GenericAccountIndex) {
      // `value.toBn()` on AccountIndex returns a pure BN (i.e. not an
      // AccountIndex), which has the initial `toString()` implementation.
      return value.toBn();
    } else if (util.isBn(value) || util.isNumber(value) || util.isHex(value) || util.isU8a(value) || util.isBigInt(value)) {
      return value;
    }

    return decodeAccountIndex(utilCrypto.decodeAddress(value));
  }
  /**
   * @name GenericAccountIndex
   * @description
   * A wrapper around an AccountIndex, which is a shortened, variable-length encoding
   * for an Account. We extends from [[U32]] to provide the number-like properties.
   */


  class GenericAccountIndex extends u32 {
    constructor(registry, value = new util.BN(0)) {
      super(registry, decodeAccountIndex(value));
    }

    static calcLength(_value) {
      const value = util.bnToBn(_value);

      if (value.lte(MAX_1BYTE)) {
        return 1;
      } else if (value.lt(MAX_2BYTE)) {
        return 2;
      } else if (value.lt(MAX_4BYTE)) {
        return 4;
      }

      return 8;
    }

    static readLength(input) {
      const first = input[0];

      if (first === PREFIX_2BYTE) {
        return [1, 2];
      } else if (first === PREFIX_4BYTE) {
        return [1, 4];
      } else if (first === PREFIX_8BYTE) {
        return [1, 8];
      }

      return [0, 1];
    }

    static writeLength(input) {
      switch (input.length) {
        case 2:
          return new Uint8Array([PREFIX_2BYTE]);

        case 4:
          return new Uint8Array([PREFIX_4BYTE]);

        case 8:
          return new Uint8Array([PREFIX_8BYTE]);

        default:
          return new Uint8Array([]);
      }
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      // shortcut for BN or Number, don't create an object
      if (util.isBn(other) || util.isNumber(other)) {
        return super.eq(other);
      } // convert and compare


      return super.eq(this.registry.createType('AccountIndex', other));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toString();
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      const length = GenericAccountIndex.calcLength(this);
      return utilCrypto.encodeAddress(this.toU8a().subarray(0, length), this.registry.chainSS58);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'AccountIndex';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const ACCOUNT_ID_PREFIX$1 = new Uint8Array([0xff]);
  /** @internal */

  function decodeString$1(registry, value) {
    const decoded = utilCrypto.decodeAddress(value);
    return decoded.length === 20 ? registry.createType('EthereumAccountId', decoded) : registry.createType('AccountIndex', util.u8aToBn(decoded, true));
  }
  /** @internal */


  function decodeU8a$2(registry, value) {
    // This allows us to instantiate an address with a raw publicKey. Do this first before
    // we checking the first byte, otherwise we may split an already-existent valid address
    if (value.length === 20) {
      return registry.createType('EthereumAccountId', value);
    } else if (value[0] === 0xff) {
      return registry.createType('EthereumAccountId', value.subarray(1));
    }

    const [offset, length] = GenericAccountIndex.readLength(value);
    return registry.createType('AccountIndex', util.u8aToBn(value.subarray(offset, offset + length), true));
  }
  /**
   * @name GenericEthereumLookupSource
   * @description
   * A wrapper around an EthereumAccountId and/or AccountIndex that is encoded with a prefix.
   * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
   * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
   * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
   */


  class GenericEthereumLookupSource extends Base {
    constructor(registry, value = new Uint8Array()) {
      super(registry, GenericEthereumLookupSource._decodeAddress(registry, value));
    }
    /** @internal */


    static _decodeAddress(registry, value) {
      return value instanceof GenericEthereumLookupSource ? value._raw : value instanceof GenericEthereumAccountId || value instanceof GenericAccountIndex ? value : util.isBn(value) || util.isNumber(value) || util.isBigInt(value) ? registry.createType('AccountIndex', value) : Array.isArray(value) || util.isHex(value) || util.isU8a(value) ? decodeU8a$2(registry, util.u8aToU8a(value)) : decodeString$1(registry, value);
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      const rawLength = this._rawLength;
      return rawLength + ( // for 1 byte AccountIndexes, we are not adding a specific prefix
      rawLength > 1 ? 1 : 0);
    }
    /**
     * @description The length of the raw value, either AccountIndex or AccountId
     */


    get _rawLength() {
      return this._raw instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this._raw) : this._raw.encodedLength;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Address';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const encoded = this._raw.toU8a().subarray(0, this._rawLength);

      return isBare ? encoded : util.u8aConcat(this._raw instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : ACCOUNT_ID_PREFIX$1, encoded);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decodeAccountId(value) {
    if (!value) {
      return new Uint8Array();
    } else if (util.isU8a(value) || Array.isArray(value)) {
      return util.u8aToU8a(value);
    } else if (util.isHex(value)) {
      return util.hexToU8a(value);
    } else if (util.isString(value)) {
      return utilCrypto.decodeAddress(value);
    }

    throw new Error(`Unknown type passed to AccountId constructor, found typeof ${typeof value}`);
  }
  /**
   * @name GenericAccountId
   * @description
   * A wrapper around an AccountId/PublicKey representation. Since we are dealing with
   * underlying PublicKeys (32 bytes in length), we extend from U8aFixed which is
   * just a Uint8Array wrapper with a fixed length.
   */


  class GenericAccountId extends U8aFixed {
    constructor(registry, value) {
      const decoded = decodeAccountId(value); // Part of stream containing >= 32 bytes or a all empty (defaults)

      util.assert(decoded.length >= 32 || !decoded.some(b => b), () => `Invalid AccountId provided, expected 32 bytes, found ${decoded.length}`);
      super(registry, decoded, 256);
    }
    /**
     * @description Compares the value of the input to see if there is a match
     */


    eq(other) {
      return super.eq(decodeAccountId(other));
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toJSON();
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      return this.toString();
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return utilCrypto.encodeAddress(this, this.registry.chainSS58);
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'AccountId';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  /**
   * @name GenericBlock
   * @description
   * A block encoded with header and extrinsics
   */
  class GenericBlock extends Struct {
    constructor(registry, value) {
      super(registry, {
        header: 'Header',
        // eslint-disable-next-line sort-keys
        extrinsics: 'Vec<Extrinsic>'
      }, value);
    }
    /**
     * @description Encodes a content [[Hash]] for the block
     */


    get contentHash() {
      return this.registry.hash(this.toU8a());
    }
    /**
     * @description The [[Extrinsic]] contained in the block
     */


    get extrinsics() {
      return this.get('extrinsics');
    }
    /**
     * @description Block/header [[Hash]]
     */


    get hash() {
      return this.header.hash;
    }
    /**
     * @description The [[Header]] of the block
     */


    get header() {
      return this.get('header');
    }

  }

  function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /**
   * Get a mapping of `argument name -> argument type` for the function, from
   * its metadata.
   *
   * @param meta - The function metadata used to get the definition.
   * @internal
   */
  function getArgsDef(registry, meta) {
    return meta.fields.reduce((result, {
      name,
      type
    }, index) => {
      result[name.unwrapOr(`param${index}`).toString()] = registry.createLookupType(type);
      return result;
    }, {});
  }
  /** @internal */


  function decodeCallViaObject(registry, value, _meta) {
    // we only pass args/methodsIndex out
    const {
      args,
      callIndex
    } = value; // Get the correct lookupIndex
    // eslint-disable-next-line @typescript-eslint/no-use-before-define

    const lookupIndex = callIndex instanceof GenericCallIndex ? callIndex.toU8a() : callIndex; // Find metadata with callIndex

    const meta = _meta || registry.findMetaCall(lookupIndex).meta;

    return {
      args,
      argsDef: getArgsDef(registry, meta),
      callIndex,
      meta
    };
  }
  /** @internal */


  function decodeCallViaU8a(registry, value, _meta) {
    // We need 2 bytes for the callIndex
    const callIndex = new Uint8Array(2);
    callIndex.set(value.subarray(0, 2), 0); // Find metadata with callIndex

    const meta = _meta || registry.findMetaCall(callIndex).meta;

    return {
      args: value.subarray(2),
      argsDef: getArgsDef(registry, meta),
      callIndex,
      meta
    };
  }
  /**
   * Decode input to pass into constructor.
   *
   * @param value - Value to decode, one of:
   * - hex
   * - Uint8Array
   * - {@see DecodeMethodInput}
   * @param _meta - Metadata to use, so that `injectMethods` lookup is not
   * necessary.
   * @internal
   */


  function decodeCall(registry, value = new Uint8Array(), _meta) {
    if (util.isHex(value) || util.isU8a(value)) {
      return decodeCallViaU8a(registry, util.u8aToU8a(value), _meta);
    } else if (util.isObject(value) && value.callIndex && value.args) {
      return decodeCallViaObject(registry, value, _meta);
    }

    throw new Error(`Call: Cannot decode value '${value}' of type ${typeof value}`);
  }
  /**
   * @name GenericCallIndex
   * @description
   * A wrapper around the `[sectionIndex, methodIndex]` value that uniquely identifies a method
   */


  class GenericCallIndex extends U8aFixed {
    constructor(registry, value) {
      super(registry, value, 16);
    }

  }
  /**
   * @name GenericCall
   * @description
   * Extrinsic function descriptor
   */

  class GenericCall extends Struct {
    constructor(registry, value, meta) {
      const decoded = decodeCall(registry, value, meta);

      try {
        super(registry, {
          callIndex: GenericCallIndex,
          // eslint-disable-next-line sort-keys
          args: Struct.with(decoded.argsDef)
        }, decoded);
        this._meta = void 0;
      } catch (error) {
        let method = 'unknown.unknown';

        try {
          const c = registry.findMetaCall(decoded.callIndex);
          method = `${c.section}.${c.method}`;
        } catch (error) {// ignore
        }

        throw new Error(`Call: failed decoding ${method}:: ${error.message}`);
      }

      this._meta = decoded.meta;
    }
    /**
     * @description The arguments for the function call
     */


    get args() {
      // FIXME This should return a Struct instead of an Array
      return [...this.get('args').values()];
    }
    /**
     * @description The argument definitions
     */


    get argsDef() {
      return getArgsDef(this.registry, this.meta);
    }
    /**
     * @description The encoded `[sectionIndex, methodIndex]` identifier
     */


    get callIndex() {
      return this.get('callIndex').toU8a();
    }
    /**
     * @description The encoded data
     */


    get data() {
      return this.get('args').toU8a();
    }
    /**
     * @description The [[FunctionMetadata]]
     */


    get meta() {
      return this._meta;
    }
    /**
     * @description Returns the name of the method
     */


    get method() {
      return this.registry.findMetaCall(this.callIndex).method;
    }
    /**
     * @description Returns the module containing the method
     */


    get section() {
      return this.registry.findMetaCall(this.callIndex).section;
    }
    /**
     * @description Checks if the source matches this in type
     */


    is(other) {
      return other.callIndex[0] === this.callIndex[0] && other.callIndex[1] === this.callIndex[1];
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExpanded) {
      var _call, _call2;

      let call;

      try {
        call = this.registry.findMetaCall(this.callIndex);
      } catch (error) {// swallow
      }

      return _objectSpread$a({
        args: this.args.map(arg => arg.toHuman(isExpanded)),
        // args: this.args.map((arg, index) => call
        //   ? { [call.meta.args[index].name.toString()]: arg.toHuman(isExpanded) }
        //   : arg.toHuman(isExpanded)
        // ),
        // callIndex: u8aToHex(this.callIndex),
        method: (_call = call) === null || _call === void 0 ? void 0 : _call.method,
        section: (_call2 = call) === null || _call2 === void 0 ? void 0 : _call2.section
      }, isExpanded && call ? {
        docs: call.meta.docs.map(d => d.toString())
      } : {});
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Call';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function createValue(registry, type, value, asArray = true) {
    // We detect codec here as well - when found, generally this is constructed from itself
    if (value && util.isFunction(value.unwrapOrDefault)) {
      return value;
    }

    return registry.createType(type, asArray ? util.isNull(value) || util.isUndefined(value) ? null : Array.isArray(value) ? value : [value] : value);
  }

  function decodeValue(registry, key, value) {
    return key === 'ss58Format' ? createValue(registry, 'Option<u32>', value, false) : key === 'tokenDecimals' ? createValue(registry, 'Option<Vec<u32>>', value) : key === 'tokenSymbol' ? createValue(registry, 'Option<Vec<Text>>', value) : value;
  }

  function decode(registry, value) {
    return ( // allow decoding from a map as well (ourselves)
    value && util.isFunction(value.entries) ? [...value.entries()] : Object.entries(value || {})).reduce((all, [key, value]) => {
      all[key] = decodeValue(registry, key, value);
      return all;
    }, {
      ss58Format: registry.createType('Option<u32>'),
      tokenDecimals: registry.createType('Option<Vec<u32>>'),
      tokenSymbol: registry.createType('Option<Vec<Text>>')
    });
  }

  class GenericChainProperties extends Json {
    constructor(registry, value) {
      super(registry, decode(registry, value));
    }
    /**
     * @description The chain ss58Format
     */


    get ss58Format() {
      return this.get('ss58Format');
    }
    /**
     * @description The decimals for each of the tokens
     */


    get tokenDecimals() {
      return this.get('tokenDecimals');
    }
    /**
     * @description The symbols for the tokens
     */


    get tokenSymbol() {
      return this.get('tokenSymbol');
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const CID_AURA = util.stringToU8a('aura');
  const CID_BABE = util.stringToU8a('BABE');
  const CID_GRPA = util.stringToU8a('FRNK');
  const CID_POW = util.stringToU8a('pow_');
  /**
   * @name GenericConsensusEngineId
   * @description
   * A 4-byte identifier identifying the engine
   */

  class GenericConsensusEngineId extends U8aFixed {
    constructor(registry, value) {
      super(registry, util.isNumber(value) ? util.bnToU8a(value, {
        isLe: false
      }) : value, 32);
    }
    /**
     * @description `true` if the engine matches aura
     */


    get isAura() {
      return this.eq(CID_AURA);
    }
    /**
     * @description `true` is the engine matches babe
     */


    get isBabe() {
      return this.eq(CID_BABE);
    }
    /**
     * @description `true` is the engine matches grandpa
     */


    get isGrandpa() {
      return this.eq(CID_GRPA);
    }
    /**
     * @description `true` is the engine matches pow
     */


    get isPow() {
      return this.eq(CID_POW);
    }

    _getAuraAuthor(bytes, sessionValidators) {
      return sessionValidators[this.registry.createType('RawAuraPreDigest', bytes.toU8a(true)).slotNumber.mod(new util.BN(sessionValidators.length)).toNumber()];
    }

    _getBabeAuthor(bytes, sessionValidators) {
      const digest = this.registry.createType('RawBabePreDigestCompat', bytes.toU8a(true));
      return sessionValidators[digest.value.toNumber()];
    }

    _getBytesAsAuthor(bytes) {
      return this.registry.createType('AccountId', bytes);
    }
    /**
     * @description From the input bytes, decode into an author
     */


    extractAuthor(bytes, sessionValidators) {
      if (sessionValidators !== null && sessionValidators !== void 0 && sessionValidators.length) {
        if (this.isAura) {
          return this._getAuraAuthor(bytes, sessionValidators);
        } else if (this.isBabe) {
          return this._getBabeAuthor(bytes, sessionValidators);
        }
      } // For pow & Moonbeam, the bytes are the actual author


      if (this.isPow || bytes.length === 20) {
        return this._getBytesAsAuthor(bytes);
      }

      return undefined;
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman() {
      return this.toString();
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'ConsensusEngineId';
    }
    /**
     * @description Override the default toString to return a 4-byte string
     */


    toString() {
      return this.isAscii ? util.u8aToString(this) : util.u8aToHex(this);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const ACCOUNT_ID_PREFIX = new Uint8Array([0xff]);
  /** @internal */

  function decodeString(registry, value) {
    const decoded = utilCrypto.decodeAddress(value);
    return decoded.length === 32 ? registry.createType('AccountId', decoded) : registry.createType('AccountIndex', util.u8aToBn(decoded, true));
  }
  /** @internal */


  function decodeU8a$1(registry, value) {
    // This allows us to instantiate an address with a raw publicKey. Do this first before
    // we checking the first byte, otherwise we may split an already-existent valid address
    if (value.length === 32) {
      return registry.createType('AccountId', value);
    } else if (value[0] === 0xff) {
      return registry.createType('AccountId', value.subarray(1));
    }

    const [offset, length] = GenericAccountIndex.readLength(value);
    return registry.createType('AccountIndex', util.u8aToBn(value.subarray(offset, offset + length), true));
  }
  /**
   * @name LookupSource
   * @description
   * A wrapper around an AccountId and/or AccountIndex that is encoded with a prefix.
   * Since we are dealing with underlying publicKeys (or shorter encoded addresses),
   * we extend from Base with an AccountId/AccountIndex wrapper. Basically the Address
   * is encoded as `[ <prefix-byte>, ...publicKey/...bytes ]` as per spec
   */


  class GenericLookupSource extends Base {
    constructor(registry, value = new Uint8Array()) {
      super(registry, GenericLookupSource._decodeAddress(registry, value));
    }
    /** @internal */


    static _decodeAddress(registry, value) {
      return value instanceof GenericLookupSource ? value._raw : value instanceof GenericAccountId || value instanceof GenericAccountIndex ? value : util.isBn(value) || util.isNumber(value) || util.isBigInt(value) ? registry.createType('AccountIndex', value) : Array.isArray(value) || util.isHex(value) || util.isU8a(value) ? decodeU8a$1(registry, util.u8aToU8a(value)) : decodeString(registry, value);
    }
    /**
     * @description The length of the value when encoded as a Uint8Array
     */


    get encodedLength() {
      const rawLength = this._rawLength;
      return rawLength + ( // for 1 byte AccountIndexes, we are not adding a specific prefix
      rawLength > 1 ? 1 : 0);
    }
    /**
     * @description The length of the raw value, either AccountIndex or AccountId
     */


    get _rawLength() {
      return this._raw instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this._raw) : this._raw.encodedLength;
    }
    /**
     * @description Returns a hex string representation of the value
     */


    toHex() {
      return util.u8aToHex(this.toU8a());
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Address';
    }
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */


    toU8a(isBare) {
      const encoded = this._raw.toU8a().subarray(0, this._rawLength);

      return isBare ? encoded : util.u8aConcat(this._raw instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : ACCOUNT_ID_PREFIX, encoded);
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function decodeU8a(registry, u8a) {
    if ([0, 32].includes(u8a.length)) {
      return {
        Id: u8a
      };
    } else if (u8a.length === 20) {
      return {
        Address20: u8a
      };
    } else if (u8a.length <= 8) {
      return {
        Index: registry.createType('AccountIndex', u8a).toNumber()
      };
    }

    return u8a;
  }

  function decodeMultiAny(registry, value) {
    if (value instanceof GenericMultiAddress) {
      return value;
    } else if (value instanceof GenericAccountId) {
      return {
        Id: value
      };
    } else if (value instanceof GenericAccountIndex || util.isBn(value) || util.isNumber(value)) {
      return {
        Index: util.isNumber(value) ? value : value.toNumber()
      };
    } else if (util.isString(value)) {
      return decodeU8a(registry, utilCrypto.decodeAddress(value.toString()));
    } else if (util.isU8a(value)) {
      return decodeU8a(registry, value);
    }

    return value;
  }

  class GenericMultiAddress extends Enum {
    constructor(registry, value) {
      super(registry, {
        Id: 'AccountId',
        Index: 'Compact<AccountIndex>',
        Raw: 'Bytes',
        // eslint-disable-next-line sort-keys
        Address32: 'H256',
        // eslint-disable-next-line sort-keys
        Address20: 'H160'
      }, decodeMultiAny(registry, value));
    }
    /**
     * @description Returns the string representation of the value
     */


    toString() {
      return this.value.toString();
    }

  }

  function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  const TYPE_UNWRAP = {
    toNumber: () => -1
  }; // Alias the primitive enum with out known values

  const PRIMITIVE_ALIAS = {
    Char: 'u32',
    // Rust char is 4-bytes
    Str: 'Text'
  }; // These are types where we have a specific decoding/encoding override + helpers

  const PRIMITIVE_PATHS = [// match {node, axia, ...}_runtime
  '*_runtime::Call', '*_runtime::Event', // these have a specific encoding or logic (for pallets)
  'pallet_democracy::vote::Vote', 'pallet_identity::types::Data', // these are well-known types with additional encoding
  'sp_core::crypto::AccountId32', 'sp_runtime::generic::era::Era', 'sp_runtime::multiaddress::MultiAddress', // shorten some well-known types
  'primitive_types::*', 'sp_arithmetic::per_things::*', // ink!
  'ink_env::types::*'].map(p => p.split('::')); // Mappings for types that should be converted to set via BitVec

  const SETS = ['pallet_identity::types::BitFlags'].map(p => p.split('::')); // These we never use these as top-level names, they are wrappers

  const WRAPPERS = ['BoundedBTreeMap', 'BoundedVec', 'Box', 'BTreeMap', 'Cow', 'Result', 'Option', 'WeakBoundedVec']; // These are reserved and/or conflicts with built-in Codec definitions

  const RESERVED = ['call', 'entries', 'hash', 'keys', 'new', 'size'];

  function matchParts(first, second) {
    return first.length === second.length && first.every((a, index) => {
      const b = second[index].toString();
      return a === '*' || a === b || a.includes('*') && a.includes('_') && b.includes('_') && matchParts(a.split('_'), b.split('_'));
    });
  } // check if the path matches the PRIMITIVE_SP (with wildcards)


  function getPrimitivePath(path) {
    // TODO We need to handle ink! Balance in some way
    return path.length && PRIMITIVE_PATHS.some(p => matchParts(p, path)) ? path[path.length - 1].toString() : null;
  }

  function removeDuplicateNames(lookup, names) {
    const rewrite = {};
    return names.map(([lookupIndex, name, params]) => {
      if (!name) {
        return [lookupIndex, null];
      } // those where the name is matching


      const allSame = names.filter(([, oName]) => name === oName); // are there among matching names

      const anyDiff = allSame.some(([oIndex,, oParams]) => lookupIndex !== oIndex && (params.length !== oParams.length || params.some((p, index) => !p.name.eq(oParams[index].name) || p.type.unwrapOr(TYPE_UNWRAP).toNumber() !== oParams[index].type.unwrapOr(TYPE_UNWRAP).toNumber()))); // everything matches, we can combine these

      if (!anyDiff || !allSame[0][2].length) {
        return [lookupIndex, name];
      } // find the first parameter that yields differences


      const paramIdx = allSame[0][2].findIndex(({
        type
      }, index) => allSame.every(([,, params]) => params[index].type.isSome) && allSame.every(([,, params], aIndex) => aIndex === 0 || !params[index].type.eq(type))); // No param found that is different

      if (paramIdx === -1) {
        return [lookupIndex, name];
      } // see if using the param type helps


      const adjusted = allSame.map(([oIndex, oName, oParams]) => {
        const {
          def,
          path
        } = lookup.getSiType(oParams[paramIdx].type.unwrap());

        if (!def.isPrimitive && !path.length) {
          return [oIndex, null];
        }

        return [oIndex, def.isPrimitive ? `${oName}${def.asPrimitive.toString()}` : `${oName}${path[path.length - 1].toString()}`];
      }); // any dupes remaining?

      const noDupes = adjusted.every(([i, n]) => !!n && !adjusted.some(([ai, an]) => i !== ai && n === an));

      if (noDupes) {
        // we filtered above for null names
        adjusted.forEach(([index, name]) => {
          rewrite[index] = name;
        });
      }

      return noDupes ? [lookupIndex, name] : [lookupIndex, null];
    }).filter(n => !!n[1]).map(([lookupIndex, name]) => [lookupIndex, rewrite[lookupIndex] || name]);
  }

  function extractName(types, {
    id,
    type: {
      params,
      path
    }
  }) {
    const lookupIndex = id.toNumber();

    if (!path.length || WRAPPERS.includes(path[path.length - 1].toString())) {
      return [lookupIndex, null, []];
    }

    const parts = path.map(p => util.stringUpperFirst(util.stringCamelCase(p))).filter((p, index) => ( // Remove ::{pallet, traits, types}::
    index !== 1 || !['Pallet', 'Traits', 'Types'].includes(p.toString())) && ( // sp_runtime::generic::digest::Digest -> sp_runtime::generic::Digest
    // sp_runtime::multiaddress::MultiAddress -> sp_runtime::MultiAddress
    index === path.length - 1 || p.toLowerCase() !== path[index + 1].toLowerCase()));
    let typeName = parts.join('');

    if (parts.length === 2 && parts[parts.length - 1] === 'RawOrigin' && params.length === 2 && params[1].type.isSome) {
      // Do magic for RawOrigin lookup
      const instanceType = types[params[1].type.unwrap().toNumber()];

      if (instanceType.type.path.length === 2) {
        typeName = `${typeName}${instanceType.type.path[1].toString()}`;
      }
    }

    return [lookupIndex, typeName, params];
  }

  function extractNames(lookup, types) {
    const dedup = removeDuplicateNames(lookup, types.map(t => extractName(types, t)));
    const [names, typesNew] = dedup.reduce(([names, types], [lookupIndex, name]) => {
      // We set the name for this specific type
      names[lookupIndex] = name; // we map to the actual lookupIndex

      types[name] = lookup.registry.createLookupType(lookupIndex);
      return [names, types];
    }, [{}, {}]);
    lookup.registry.register(typesNew);
    return names;
  }

  var _names = /*#__PURE__*/_classPrivateFieldKey("names");

  var _typeDefs = /*#__PURE__*/_classPrivateFieldKey("typeDefs");

  var _createSiDef = /*#__PURE__*/_classPrivateFieldKey("createSiDef");

  var _getLookupId = /*#__PURE__*/_classPrivateFieldKey("getLookupId");

  var _extract = /*#__PURE__*/_classPrivateFieldKey("extract");

  var _extractArray = /*#__PURE__*/_classPrivateFieldKey("extractArray");

  var _extractBitSequence = /*#__PURE__*/_classPrivateFieldKey("extractBitSequence");

  var _extractCompact = /*#__PURE__*/_classPrivateFieldKey("extractCompact");

  var _extractComposite = /*#__PURE__*/_classPrivateFieldKey("extractComposite");

  var _extractCompositeSet = /*#__PURE__*/_classPrivateFieldKey("extractCompositeSet");

  var _extractFields = /*#__PURE__*/_classPrivateFieldKey("extractFields");

  var _extractFieldsAlias = /*#__PURE__*/_classPrivateFieldKey("extractFieldsAlias");

  var _extractHistoric = /*#__PURE__*/_classPrivateFieldKey("extractHistoric");

  var _extractPrimitive = /*#__PURE__*/_classPrivateFieldKey("extractPrimitive");

  var _extractPrimitivePath = /*#__PURE__*/_classPrivateFieldKey("extractPrimitivePath");

  var _extractSequence = /*#__PURE__*/_classPrivateFieldKey("extractSequence");

  var _extractTuple = /*#__PURE__*/_classPrivateFieldKey("extractTuple");

  var _extractVariant = /*#__PURE__*/_classPrivateFieldKey("extractVariant");

  var _extractVariantEnum = /*#__PURE__*/_classPrivateFieldKey("extractVariantEnum");

  class GenericPortableRegistry extends Struct {
    constructor(registry, value) {
      super(registry, {
        types: 'Vec<PortableType>'
      }, value);
      Object.defineProperty(this, _extractVariantEnum, {
        value: _extractVariantEnum2
      });
      Object.defineProperty(this, _extractVariant, {
        value: _extractVariant2
      });
      Object.defineProperty(this, _extractTuple, {
        value: _extractTuple2
      });
      Object.defineProperty(this, _extractSequence, {
        value: _extractSequence2
      });
      Object.defineProperty(this, _extractPrimitivePath, {
        value: _extractPrimitivePath2
      });
      Object.defineProperty(this, _extractPrimitive, {
        value: _extractPrimitive2
      });
      Object.defineProperty(this, _extractHistoric, {
        value: _extractHistoric2
      });
      Object.defineProperty(this, _extractFieldsAlias, {
        value: _extractFieldsAlias2
      });
      Object.defineProperty(this, _extractFields, {
        value: _extractFields2
      });
      Object.defineProperty(this, _extractCompositeSet, {
        value: _extractCompositeSet2
      });
      Object.defineProperty(this, _extractComposite, {
        value: _extractComposite2
      });
      Object.defineProperty(this, _extractCompact, {
        value: _extractCompact2
      });
      Object.defineProperty(this, _extractBitSequence, {
        value: _extractBitSequence2
      });
      Object.defineProperty(this, _extractArray, {
        value: _extractArray2
      });
      Object.defineProperty(this, _extract, {
        value: _extract2
      });
      Object.defineProperty(this, _getLookupId, {
        value: _getLookupId2
      });
      Object.defineProperty(this, _createSiDef, {
        value: _createSiDef2
      });
      Object.defineProperty(this, _names, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _typeDefs, {
        writable: true,
        value: {}
      });
      _classPrivateFieldBase(this, _names)[_names] = extractNames(this, this.types);
    }
    /**
     * @description The types of the registry
     */


    get types() {
      return this.get('types');
    }
    /**
     * @description Returns the name for a specific lookup
     */


    getName(lookupId) {
      return _classPrivateFieldBase(this, _names)[_names][_classPrivateFieldBase(this, _getLookupId)[_getLookupId](lookupId)];
    }
    /**
     * @description Finds a specific type in the registry
     */


    getSiType(lookupId) {
      const found = this.types[_classPrivateFieldBase(this, _getLookupId)[_getLookupId](lookupId)];

      util.assert(found, () => `PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);
      return found.type;
    }
    /**
     * @description Lookup the type definition for the index
     */


    getTypeDef(lookupId) {
      const lookupIndex = _classPrivateFieldBase(this, _getLookupId)[_getLookupId](lookupId);

      if (!_classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex]) {
        const lookupName = _classPrivateFieldBase(this, _names)[_names][lookupIndex];

        const empty = {
          info: exports.TypeDefInfo.DoNotConstruct,
          lookupIndex,
          lookupName,
          type: this.registry.createLookupType(lookupIndex)
        }; // Set named items since we will get into circular lookups along the way

        if (lookupName) {
          _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex] = empty;
        }

        const extracted = _classPrivateFieldBase(this, _extract)[_extract](this.getSiType(lookupId), lookupIndex); // For non-named items, we only set this right at the end


        if (!lookupName) {
          _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex] = empty;
        }

        Object.keys(extracted).forEach(k => {
          if (k !== 'lookupName' || extracted[k]) {
            // these are safe since we are looking through the keys as set
            _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex][k] = extracted[k];
          }
        }); // don't set lookupName on lower-level, we want to always direct to the type

        if (extracted.info === exports.TypeDefInfo.Plain) {
          _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex].lookupNameRoot = _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex].lookupName;
          delete _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex].lookupName;
        }
      }

      return _classPrivateFieldBase(this, _typeDefs)[_typeDefs][lookupIndex];
    }

  }

  function _createSiDef2(lookupId) {
    const typeDef = this.getTypeDef(lookupId);
    const lookupIndex = lookupId.toNumber(); // Setup for a lookup on complex types

    return [exports.TypeDefInfo.Enum, exports.TypeDefInfo.Struct].includes(typeDef.info) && typeDef.lookupName ? {
      docs: typeDef.docs,
      info: exports.TypeDefInfo.Si,
      lookupIndex,
      lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex],
      type: this.registry.createLookupType(lookupId)
    } : typeDef;
  }

  function _getLookupId2(lookupId) {
    if (util.isString(lookupId)) {
      util.assert(this.registry.isLookupType(lookupId), () => `PortableRegistry: Expected a lookup string type, found ${lookupId}`);
      return parseInt(lookupId.replace('Lookup', ''), 10);
    } else if (util.isNumber(lookupId)) {
      return lookupId;
    }

    return lookupId.toNumber();
  }

  function _extract2(type, lookupIndex) {
    const namespace = [...type.path].join('::');
    let typeDef;
    const primType = getPrimitivePath(type.path);

    try {
      if (primType) {
        typeDef = _classPrivateFieldBase(this, _extractPrimitivePath)[_extractPrimitivePath](lookupIndex, primType);
      } else if (type.def.isArray) {
        typeDef = _classPrivateFieldBase(this, _extractArray)[_extractArray](lookupIndex, type.def.asArray);
      } else if (type.def.isBitSequence) {
        typeDef = _classPrivateFieldBase(this, _extractBitSequence)[_extractBitSequence](lookupIndex, type.def.asBitSequence);
      } else if (type.def.isCompact) {
        typeDef = _classPrivateFieldBase(this, _extractCompact)[_extractCompact](lookupIndex, type.def.asCompact);
      } else if (type.def.isComposite) {
        typeDef = _classPrivateFieldBase(this, _extractComposite)[_extractComposite](lookupIndex, type, type.def.asComposite);
      } else if (type.def.isHistoricMetaCompat) {
        typeDef = _classPrivateFieldBase(this, _extractHistoric)[_extractHistoric](lookupIndex, type.def.asHistoricMetaCompat);
      } else if (type.def.isPrimitive) {
        typeDef = _classPrivateFieldBase(this, _extractPrimitive)[_extractPrimitive](lookupIndex, type);
      } else if (type.def.isSequence) {
        typeDef = _classPrivateFieldBase(this, _extractSequence)[_extractSequence](lookupIndex, type.def.asSequence);
      } else if (type.def.isTuple) {
        typeDef = _classPrivateFieldBase(this, _extractTuple)[_extractTuple](lookupIndex, type.def.asTuple);
      } else if (type.def.isVariant) {
        typeDef = _classPrivateFieldBase(this, _extractVariant)[_extractVariant](lookupIndex, type, type.def.asVariant);
      } else {
        throw new Error(`No SiTypeDef handler for ${type.def.toString()}`);
      }
    } catch (error) {
      throw new Error(`PortableRegistry: ${lookupIndex}${namespace ? ` (${namespace})` : ''}: Error extracting ${util.stringify(type)}: ${error.message}`);
    }

    return _objectSpread$9({
      docs: type.docs.map(d => d.toString()),
      namespace
    }, typeDef);
  }

  function _extractArray2(_, {
    len: length,
    type
  }) {
    util.assert(!length || length.toNumber() <= 256, 'Only support for [Type; <length>], where length <= 256');
    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.VecFixed,
      length: length.toNumber(),
      sub: _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type)
    });
  }

  function _extractBitSequence2(_, {
    bitOrderType,
    bitStoreType
  }) {
    const bitOrder = _classPrivateFieldBase(this, _createSiDef)[_createSiDef](bitOrderType);

    const bitStore = _classPrivateFieldBase(this, _createSiDef)[_createSiDef](bitStoreType); // NOTE: Currently the BitVec type is one-way only, i.e. we only use it to decode, not
    // re-encode stuff. As such we ignore the msb/lsb identifier given by bitOrderType, or rather
    // we don't pass it though at all


    util.assert(['bitvec::order::Lsb0', 'bitvec::order::Msb0'].includes(bitOrder.namespace || ''), () => `Unexpected bitOrder found as ${bitOrder.namespace || '<unknown>'}`);
    util.assert(bitStore.info === exports.TypeDefInfo.Plain && bitStore.type === 'u8', () => `Only u8 bitStore is currently supported, found ${bitStore.type}`);
    return {
      info: exports.TypeDefInfo.Plain,
      type: 'BitVec'
    };
  }

  function _extractCompact2(_, {
    type
  }) {
    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.Compact,
      sub: _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type)
    });
  }

  function _extractComposite2(lookupIndex, {
    params,
    path
  }, {
    fields
  }) {
    const specialVariant = path[0].toString();

    if (path.length === 1 && specialVariant === 'BTreeMap') {
      return withTypeString(this.registry, {
        info: exports.TypeDefInfo.BTreeMap,
        sub: params.map(({
          type
        }) => _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type.unwrap()))
      });
    } else if (['Range', 'RangeInclusive'].includes(specialVariant)) {
      return withTypeString(this.registry, {
        info: exports.TypeDefInfo.Range,
        sub: fields.map(({
          name,
          type
        }, index) => _objectSpread$9({
          name: name.isSome ? name.unwrap().toString() : ['start', 'end'][index]
        }, _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type)))
      });
    }

    return SETS.some(p => matchParts(p, path)) ? _classPrivateFieldBase(this, _extractCompositeSet)[_extractCompositeSet](lookupIndex, params, fields) : _classPrivateFieldBase(this, _extractFields)[_extractFields](lookupIndex, fields);
  }

  function _extractCompositeSet2(_, params, fields) {
    util.assert(params.length === 1 && fields.length === 1, 'Set handling expects param/field as single entries');
    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.Set,
      length: this.registry.createType(this.registry.createLookupType(fields[0].type)).bitLength(),
      sub: this.getSiType(params[0].type.unwrap()).def.asVariant.variants.map(({
        index,
        name
      }) => ({
        // This will be an issue > 2^53 - 1 ... don't have those (yet)
        index: index.toNumber(),
        info: exports.TypeDefInfo.Plain,
        name: name.toString(),
        type: 'Null'
      }))
    });
  }

  function _extractFields2(lookupIndex, fields) {
    const [isStruct, isTuple] = fields.reduce(([isAllNamed, isAllUnnamed], {
      name
    }) => [isAllNamed && name.isSome, isAllUnnamed && name.isNone], [true, true]);
    util.assert(isTuple || isStruct, 'Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)');

    if (fields.length === 0) {
      return {
        info: exports.TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (isTuple && fields.length === 1) {
      const typeDef = _classPrivateFieldBase(this, _createSiDef)[_createSiDef](fields[0].type);

      return _objectSpread$9(_objectSpread$9({}, typeDef), lookupIndex === -1 ? {} : {
        lookupIndex,
        lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex],
        lookupNameRoot: typeDef.lookupName
      });
    }

    const [sub, alias] = _classPrivateFieldBase(this, _extractFieldsAlias)[_extractFieldsAlias](fields);

    return withTypeString(this.registry, _objectSpread$9(_objectSpread$9(_objectSpread$9({
      info: isTuple // Tuple check first
      ? exports.TypeDefInfo.Tuple : exports.TypeDefInfo.Struct
    }, alias.size ? {
      alias
    } : {}), lookupIndex === -1 ? {} : {
      lookupIndex,
      lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex]
    }), {}, {
      sub
    }));
  }

  function _extractFieldsAlias2(fields) {
    const alias = new Map();
    const sub = fields.map(({
      docs,
      name,
      type
    }) => {
      const typeDef = _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type);

      if (name.isNone) {
        return typeDef;
      }

      let nameField = util.stringCamelCase(name.unwrap());
      let nameOrig = null;

      if (nameField.includes('#')) {
        nameOrig = nameField;
        nameField = nameOrig.replace(/#/g, '_');
      } else if (RESERVED.includes(nameField)) {
        nameOrig = nameField;
        nameField = `${nameField}_`;
      }

      if (nameOrig) {
        alias.set(nameField, nameOrig);
      }

      return _objectSpread$9(_objectSpread$9({}, typeDef), {}, {
        docs: docs.map(d => d.toString()),
        name: nameField
      });
    });
    return [sub, alias];
  }

  function _extractHistoric2(_, type) {
    return _objectSpread$9(_objectSpread$9({}, getTypeDef(type)), {}, {
      displayName: type.toString(),
      isFromSi: true
    });
  }

  function _extractPrimitive2(_, type) {
    const typeStr = type.def.asPrimitive.type.toString();
    return {
      info: exports.TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }

  function _extractPrimitivePath2(_, type) {
    return {
      info: exports.TypeDefInfo.Plain,
      type
    };
  }

  function _extractSequence2(lookupIndex, {
    type
  }) {
    const sub = _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type);

    if (sub.type === 'u8') {
      return {
        info: exports.TypeDefInfo.Plain,
        type: 'Bytes'
      };
    }

    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.Vec,
      lookupIndex,
      lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex],
      sub
    });
  }

  function _extractTuple2(lookupIndex, ids) {
    if (ids.length === 0) {
      return {
        info: exports.TypeDefInfo.Null,
        type: 'Null'
      };
    } else if (ids.length === 1) {
      return this.getTypeDef(ids[0]);
    }

    const sub = ids.map(type => _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type));
    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.Tuple,
      lookupIndex,
      lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex],
      sub
    });
  }

  function _extractVariant2(lookupIndex, {
    params,
    path
  }, {
    variants
  }) {
    const specialVariant = path[0].toString();

    if (specialVariant === 'Option') {
      return withTypeString(this.registry, {
        info: exports.TypeDefInfo.Option,
        sub: _classPrivateFieldBase(this, _createSiDef)[_createSiDef](params[0].type.unwrap())
      });
    } else if (specialVariant === 'Result') {
      return withTypeString(this.registry, {
        info: exports.TypeDefInfo.Result,
        sub: params.map(({
          type
        }, index) => _objectSpread$9({
          name: ['Ok', 'Error'][index]
        }, _classPrivateFieldBase(this, _createSiDef)[_createSiDef](type.unwrap())))
      });
    } else if (variants.length === 0) {
      return {
        info: exports.TypeDefInfo.Null,
        type: 'Null'
      };
    }

    return _classPrivateFieldBase(this, _extractVariantEnum)[_extractVariantEnum](lookupIndex, variants);
  }

  function _extractVariantEnum2(lookupIndex, variants) {
    const sub = []; // we may get entries out of order, arrange them first before creating with gaps filled
    // NOTE: Since we mutate, use a copy of the array as an input

    [...variants].sort((a, b) => a.index.cmp(b.index)).forEach(({
      fields,
      index,
      name
    }) => {
      const desired = index.toNumber();

      while (sub.length !== desired) {
        sub.push({
          index: sub.length,
          info: exports.TypeDefInfo.Null,
          name: `Unused${sub.length}`,
          type: 'Null'
        });
      }

      sub.push(_objectSpread$9(_objectSpread$9({}, _classPrivateFieldBase(this, _extractFields)[_extractFields](-1, fields)), {}, {
        index: index.toNumber(),
        name: name.toString()
      }));
    });
    return withTypeString(this.registry, {
      info: exports.TypeDefInfo.Enum,
      lookupIndex,
      lookupName: _classPrivateFieldBase(this, _names)[_names][lookupIndex],
      sub
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // For votes, the topmost bit indicated aye/nay, the lower bits indicate the conviction
  const AYE_BITS = 0b10000000;
  const NAY_BITS = 0b00000000;
  const CON_MASK = 0b01111111;
  const DEF_CONV = 0b00000000; // the default conviction, None

  /** @internal */

  function decodeVoteBool(value) {
    return value ? new Uint8Array([AYE_BITS | DEF_CONV]) : new Uint8Array([NAY_BITS]);
  }
  /** @internal */


  function decodeVoteU8a(value) {
    return value.length ? value.subarray(0, 1) : new Uint8Array([NAY_BITS]);
  }
  /** @internal */


  function decodeVoteType(registry, value) {
    const vote = new bool(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS;
    const conviction = registry.createType('Conviction', value.conviction || DEF_CONV);
    return new Uint8Array([vote | conviction.index]);
  }
  /** @internal */


  function decodeVote(registry, value) {
    if (util.isUndefined(value) || value instanceof Boolean || util.isBoolean(value)) {
      return decodeVoteBool(new bool(registry, value).isTrue);
    } else if (util.isNumber(value)) {
      return decodeVoteBool(value < 0);
    } else if (util.isU8a(value)) {
      return decodeVoteU8a(value);
    }

    return decodeVoteType(registry, value);
  }
  /**
   * @name GenericVote
   * @description
   * A number of lock periods, plus a vote, one way or the other.
   */


  class GenericVote extends U8aFixed {
    constructor(registry, value) {
      // decoded is just 1 byte
      // Aye: Most Significant Bit
      // Conviction: 0000 - 0101
      const decoded = decodeVote(registry, value);
      super(registry, decoded, 8);
      this._aye = void 0;
      this._conviction = void 0;
      this._aye = (decoded[0] & AYE_BITS) === AYE_BITS;
      this._conviction = this.registry.createType('Conviction', decoded[0] & CON_MASK);
    }
    /**
     * @description returns a V2 conviction
     */


    get conviction() {
      return this._conviction;
    }
    /**
     * @description true if the wrapped value is a positive vote
     */


    get isAye() {
      return this._aye;
    }
    /**
     * @description true if the wrapped value is a negative vote
     */


    get isNay() {
      return !this.isAye;
    }
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */


    toHuman(isExpanded) {
      return {
        conviction: this.conviction.toHuman(isExpanded),
        vote: this.isAye ? 'Aye' : 'Nay'
      };
    }
    /**
     * @description Returns the base runtime type name for this instance
     */


    toRawType() {
      return 'Vote';
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const baseTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    GenericExtrinsic: GenericExtrinsic,
    GenericExtrinsicEra: GenericExtrinsicEra,
    GenericMortalEra: MortalEra,
    GenericImmortalEra: ImmortalEra,
    GenericExtrinsicPayload: GenericExtrinsicPayload,
    GenericExtrinsicPayloadUnknown: GenericExtrinsicPayloadUnknown,
    GenericExtrinsicUnknown: GenericExtrinsicUnknown,
    GenericSignerPayload: GenericSignerPayload,
    GenericExtrinsicV4: GenericExtrinsicV4,
    GenericExtrinsicPayloadV4: GenericExtrinsicPayloadV4,
    GenericExtrinsicSignatureV4: GenericExtrinsicSignatureV4,
    GenericAccountId: GenericAccountId,
    GenericAccountIndex: GenericAccountIndex,
    GenericBlock: GenericBlock,
    GenericCall: GenericCall,
    GenericChainProperties: GenericChainProperties,
    GenericConsensusEngineId: GenericConsensusEngineId,
    GenericEvent: GenericEvent,
    GenericEventData: GenericEventData,
    GenericLookupSource: GenericLookupSource,
    GenericMultiAddress: GenericMultiAddress,
    GenericAddress: GenericMultiAddress,
    GenericPortableRegistry: GenericPortableRegistry,
    GenericVote: GenericVote,
    GenericEthereumAccountId: GenericEthereumAccountId,
    GenericEthereumLookupSource: GenericEthereumLookupSource,
    BitVec: BitVec,
    bool: bool,
    Bool: bool,
    Bytes: Bytes,
    Data: Data,
    i8: i8,
    I8: i8,
    i16: i16,
    I16: i16,
    i32: i32,
    I32: i32,
    i64: i64,
    I64: i64,
    i128: i128,
    I128: i128,
    i256: i256,
    I256: i256,
    Null: Null,
    StorageKey: StorageKey,
    Text: Text,
    Type: Type,
    u8: u8,
    U8: u8,
    u16: u16,
    U16: u16,
    u32: u32,
    U32: u32,
    u64: u64,
    U64: u64,
    u128: u128,
    U128: u128,
    u256: u256,
    U256: u256,
    usize: usize,
    USize: usize
  });

  function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // migrate a storage hasher type
  // see https://github.com/axia-tech/substrate/pull/4462

  /** @internal */
  function createStorageHasher(registry, hasher) {
    // Blake2_128_Concat has been added at index 2, so we increment all the
    // indexes greater than 2
    if (hasher.toNumber() >= 2) {
      return registry.createType('StorageHasherV10', hasher.toNumber() + 1);
    }

    return registry.createType('StorageHasherV10', hasher);
  }
  /** @internal */


  function createStorageType(registry, entryType) {
    if (entryType.isMap) {
      return [_objectSpread$8(_objectSpread$8({}, entryType.asMap), {}, {
        hasher: createStorageHasher(registry, entryType.asMap.hasher)
      }), 1];
    }

    if (entryType.isDoubleMap) {
      return [_objectSpread$8(_objectSpread$8({}, entryType.asDoubleMap), {}, {
        hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
        key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
      }), 2];
    }

    return [entryType.asPlain, 0];
  }
  /** @internal */


  function convertModule(registry, mod) {
    const storage = mod.storage.unwrapOr(null);
    return registry.createType('ModuleMetadataV10', _objectSpread$8(_objectSpread$8({}, mod), {}, {
      storage: storage ? _objectSpread$8(_objectSpread$8({}, storage), {}, {
        items: storage.items.map(item => _objectSpread$8(_objectSpread$8({}, item), {}, {
          type: registry.createType('StorageEntryTypeV10', ...createStorageType(registry, item.type))
        }))
      }) : null
    }));
  }
  /** @internal */


  function toV10(registry, {
    modules
  }) {
    return registry.createType('MetadataV10', {
      modules: modules.map(mod => convertModule(registry, mod))
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /** @internal */
  function toV11(registry, {
    modules
  }) {
    return registry.createType('MetadataV11', {
      // This is new in V11, pass V0 here - something non-existing, telling the API to use
      // the fallback for this information (on-chain detection)
      extrinsic: {
        signedExtensions: [],
        version: 0
      },
      modules
    });
  }

  function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /**
   * @internal
   **/
  function toV12(registry, {
    extrinsic,
    modules
  }) {
    return registry.createType('MetadataV12', {
      extrinsic,
      modules: modules.map(mod => registry.createType('ModuleMetadataV12', _objectSpread$7(_objectSpread$7({}, mod), {}, {
        index: 255
      })))
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /**
   * @internal
   **/
  function toV13(registry, metadata) {
    return registry.createType('MetadataV13', metadata);
  }

  // Copyright 2017-2021 @axia-js/types-known authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // type overrides for modules (where duplication between modules exist)
  const typesModules = {
    assets: {
      Approval: 'AssetApproval',
      ApprovalKey: 'AssetApprovalKey',
      Balance: 'TAssetBalance',
      DestroyWitness: 'AssetDestroyWitness'
    },
    babe: {
      EquivocationProof: 'BabeEquivocationProof'
    },
    balances: {
      Status: 'BalanceStatus'
    },
    beefy: {
      AuthorityId: 'BeefyId'
    },
    contracts: {
      StorageKey: 'ContractStorageKey'
    },
    electionProviderMultiPhase: {
      Phase: 'ElectionPhase'
    },
    ethereum: {
      Block: 'EthBlock',
      Header: 'EthHeader',
      Receipt: 'EthReceipt',
      Transaction: 'EthTransaction',
      TransactionStatus: 'EthTransactionStatus'
    },
    evm: {
      Account: 'EvmAccount',
      Log: 'EvmLog',
      Vicinity: 'EvmVicinity'
    },
    grandpa: {
      Equivocation: 'GrandpaEquivocation',
      EquivocationProof: 'GrandpaEquivocationProof'
    },
    identity: {
      Judgement: 'IdentityJudgement'
    },
    inclusion: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    paraDisputes: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    paraInclusion: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    paraScheduler: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    paraShared: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    parachains: {
      Id: 'ParaId'
    },
    parasDisputes: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    parasInclusion: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    parasScheduler: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    parasShared: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    proposeParachain: {
      Proposal: 'ParachainProposal'
    },
    proxy: {
      Announcement: 'ProxyAnnouncement'
    },
    scheduler: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    shared: {
      ValidatorIndex: 'ParaValidatorIndex'
    },
    society: {
      Judgement: 'SocietyJudgement',
      Vote: 'SocietyVote'
    },
    staking: {
      Compact: 'CompactAssignments'
    },
    treasury: {
      Proposal: 'TreasuryProposal'
    },
    xcm: {
      AssetId: 'XcmAssetId'
    },
    xcmPallet: {
      AssetId: 'XcmAssetId'
    }
  };
  const typesModules$1 = typesModules;

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // We want predictive ordering (manually managed)

  /* eslint-disable sort-keys */
  // FIXME: Need some sort of solution for specifying these
  // Since we don't have insight into the origin specification, we can only define what we know about
  // in a pure Substrate/AXIA implementation, any other custom origins won't be handled at all
  const knownOrigins = {
    //
    // (1) Defaults from Substrate
    //
    Council: 'CollectiveOrigin',
    System: 'SystemOrigin',
    TechnicalCommittee: 'CollectiveOrigin',
    //
    // (2) Defaults from AXIA
    //
    Xcm: 'XcmOrigin',
    XcmPallet: 'XcmOrigin',
    //
    // (3) Defaults from Acala
    //
    Authority: 'AuthorityOrigin',
    GeneralCouncil: 'CollectiveOrigin'
  };

  function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  /**
   * @description Get types for specific modules (metadata override)
   */


  function getModuleTypes({
    knownTypes
  }, section) {
    var _knownTypes$typesAlia;

    return _objectSpread$6(_objectSpread$6({}, typesModules$1[section] || {}), ((_knownTypes$typesAlia = knownTypes.typesAlias) === null || _knownTypes$typesAlia === void 0 ? void 0 : _knownTypes$typesAlia[section]) || {});
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const BOXES = [['<', '>'], ['<', ','], [',', '>'], ['(', ')'], ['(', ','], [',', ','], [',', ')']];
  /**
   * Creates a compatible type mapping
   * @internal
   **/

  function compatType(types, _type) {
    const type = _type.toString();

    const index = types.findIndex(({
      def
    }) => def.HistoricMetaCompat === type);

    if (index !== -1) {
      return index;
    }

    return types.push({
      def: {
        HistoricMetaCompat: type
      }
    }) - 1;
  }

  function variantType(modName, variantType, types, variants) {
    return types.push({
      def: {
        Variant: {
          variants
        }
      },
      path: [`pallet_${modName.toString()}`, 'pallet', variantType]
    }) - 1;
  }
  /**
   * @internal
   * generate & register the OriginCaller type
   **/


  function registerOriginCaller(registry, modules, metaVersion) {
    registry.register({
      OriginCaller: {
        _enum: modules.map((mod, index) => [mod.name.toString(), metaVersion >= 12 ? mod.index.toNumber() : index]).sort((a, b) => a[1] - b[1]).reduce((result, [name, index]) => {
          for (let i = Object.keys(result).length; i < index; i++) {
            result[`Empty${i}`] = 'Null';
          }

          result[name] = knownOrigins[name] || 'Null';
          return result;
        }, {})
      }
    });
  }
  /**
   * Find and apply the correct type override
   * @internal
   **/


  function setTypeOverride(sectionTypes, types) {
    types.forEach(type => {
      const override = Object.keys(sectionTypes).find(aliased => type.eq(aliased));

      if (override) {
        type.setOverride(sectionTypes[override]);
      } else {
        // FIXME: NOT happy with this approach, but gets over the initial hump cased by (Vec<Announcement>,BalanceOf)
        const orig = type.toString();
        const alias = Object.entries(sectionTypes).reduce((result, [src, dst]) => BOXES.reduce((result, [a, z]) => result.replace(`${a}${src}${z}`, `${a}${dst}${z}`), result), orig);

        if (orig !== alias) {
          type.setOverride(alias);
        }
      }
    });
  }
  /**
   * Apply module-specific type overrides (always be done as part of toV14)
   * @internal
   **/


  function convertCalls(registry, types, modName, calls, sectionTypes) {
    const variants = calls.map(({
      args,
      docs,
      name
    }, index) => {
      setTypeOverride(sectionTypes, args.map(({
        type
      }) => type));
      return registry.createType('SiVariant', {
        docs,
        fields: args.map(({
          name,
          type
        }) => registry.createType('SiField', {
          name,
          type: compatType(types, type)
        })),
        index,
        name
      });
    });
    return registry.createType('PalletCallMetadataV14', {
      type: variantType(modName, 'Call', types, variants)
    });
  }
  /**
   * Apply module-specific type overrides (always be done as part of toV14)
   * @internal
   */


  function convertConstants(registry, types, constants, sectionTypes) {
    return constants.map(({
      docs,
      name,
      type,
      value
    }) => {
      setTypeOverride(sectionTypes, [type]);
      return registry.createType('PalletConstantMetadataV14', {
        docs,
        name,
        type: compatType(types, type),
        value
      });
    });
  }
  /**
   * Apply module-specific type overrides (always be done as part of toV14)
   * @internal
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function convertErrors(registry, types, modName, errors, _sectionTypes) {
    const variants = errors.map(({
      docs,
      name
    }, index) => registry.createType('SiVariant', {
      docs,
      fields: [],
      index,
      name
    }));
    return registry.createType('PalletErrorMetadataV14', {
      type: variantType(modName, 'Error', types, variants)
    });
  }
  /**
   * Apply module-specific type overrides (always be done as part of toV14)
   * @internal
   **/


  function convertEvents(registry, types, modName, events, sectionTypes) {
    const variants = events.map(({
      args,
      docs,
      name
    }, index) => {
      setTypeOverride(sectionTypes, args);
      return registry.createType('SiVariant', {
        docs,
        fields: args.map(t => registry.createType('SiField', {
          type: compatType(types, t)
        })),
        index,
        name
      });
    });
    return registry.createType('PalletEventMetadataV14', {
      type: variantType(modName, 'Event', types, variants)
    });
  }

  function createMapEntry(registry, sectionTypes, types, {
    hashers,
    keys,
    value
  }) {
    setTypeOverride(sectionTypes, [value, ...(Array.isArray(keys) ? keys : [keys])]);
    return registry.createType('StorageEntryTypeV14', {
      Map: {
        hashers,
        key: hashers.length === 1 ? compatType(types, keys[0]) : types.push({
          def: {
            Tuple: keys.map(t => compatType(types, t))
          }
        }) - 1,
        value: compatType(types, value)
      }
    });
  }
  /**
   * Apply module-specific storage type overrides (always part of toV14)
   * @internal
   **/


  function convertStorage(registry, types, {
    items,
    prefix
  }, sectionTypes) {
    return registry.createType('PalletStorageMetadataV14', {
      items: items.map(({
        docs,
        fallback,
        modifier,
        name,
        type
      }) => {
        let entryType;

        if (type.isPlain) {
          const plain = type.asPlain;
          setTypeOverride(sectionTypes, [plain]);
          entryType = registry.createType('StorageEntryTypeV14', {
            Plain: compatType(types, plain)
          });
        } else if (type.isMap) {
          const map = type.asMap;
          entryType = createMapEntry(registry, sectionTypes, types, {
            hashers: [map.hasher],
            keys: [map.key],
            value: map.value
          });
        } else if (type.isDoubleMap) {
          const dm = type.asDoubleMap;
          entryType = createMapEntry(registry, sectionTypes, types, {
            hashers: [dm.hasher, dm.key2Hasher],
            keys: [dm.key1, dm.key2],
            value: dm.value
          });
        } else {
          const nm = type.asNMap;
          entryType = createMapEntry(registry, sectionTypes, types, {
            hashers: nm.hashers,
            keys: nm.keyVec,
            value: nm.value
          });
        }

        return registry.createType('StorageEntryMetadataV14', {
          docs,
          fallback,
          modifier,
          name,
          type: entryType
        });
      }),
      prefix
    });
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function convertExtrinsic(registry, _types, {
    signedExtensions,
    version
  }) {
    return registry.createType('ExtrinsicMetadataV14', {
      signedExtensions: signedExtensions.map(identifier => ({
        identifier,
        type: 0 // we don't map the fields at all

      })),
      type: 0,
      // Map to extrinsic like in v14?
      version: version
    });
  }
  /** @internal */


  function createPallet(registry, types, mod, {
    calls,
    constants,
    errors,
    events,
    storage
  }) {
    const sectionTypes = getModuleTypes(registry, util.stringCamelCase(mod.name));
    return registry.createType('PalletMetadataV14', {
      calls: calls && convertCalls(registry, types, mod.name, calls, sectionTypes),
      constants: convertConstants(registry, types, constants, sectionTypes),
      errors: errors && convertErrors(registry, types, mod.name, errors, sectionTypes),
      events: events && convertEvents(registry, types, mod.name, events, sectionTypes),
      index: mod.index,
      name: mod.name,
      storage: storage && convertStorage(registry, types, storage, sectionTypes)
    });
  }
  /**
   * Convert the Metadata to v14
   * @internal
   **/


  function toV14(registry, v13, metaVersion) {
    // the types that we will pass
    const types = [];
    compatType(types, 'Null'); // position 0 always has Null

    registerOriginCaller(registry, v13.modules, metaVersion);
    const extrinsic = convertExtrinsic(registry, types, v13.extrinsic);
    const pallets = v13.modules.map(mod => createPallet(registry, types, mod, {
      calls: mod.calls.unwrapOr(null),
      constants: mod.constants,
      errors: mod.errors.length ? mod.errors : null,
      events: mod.events.unwrapOr(null),
      storage: mod.storage.unwrapOr(null)
    }));
    return registry.createType('MetadataV14', {
      extrinsic,
      lookup: {
        types: types.map((type, id) => registry.createType('PortableType', {
          id,
          type
        }))
      },
      pallets
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /**
   * Convert the Metadata (which is an alias) to latest
   * @internal
   **/
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function toLatest(registry, v14, _metaVersion) {
    return v14;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const MAGIC_NUMBER = 0x6174656d; // `meta`, reversed for Little Endian encoding

  class MagicNumber extends u32 {
    constructor(registry, value) {
      super(registry, value);

      if (!this.isEmpty) {
        util.assert(this.eq(MAGIC_NUMBER), () => `MagicNumber mismatch: expected ${registry.createType('u32', MAGIC_NUMBER).toHex()}, found ${this.toHex()}`);
      }
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0

  /** @internal */
  function flattenUniq(list, start = []) {
    return [...new Set(list.reduce((result, entry) => {
      if (Array.isArray(entry)) {
        return flattenUniq(entry, result);
      }

      result.push(entry);
      return result;
    }, start))];
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  /** @internal */
  function extractTypes$1(types) {
    return types.map(type => {
      const decoded = getTypeDef(type);

      switch (decoded.info) {
        case exports.TypeDefInfo.Plain:
          return decoded.type;

        case exports.TypeDefInfo.BTreeSet:
        case exports.TypeDefInfo.Compact:
        case exports.TypeDefInfo.Option:
        case exports.TypeDefInfo.Vec:
        case exports.TypeDefInfo.VecFixed:
          return extractTypes$1([decoded.sub.type]);

        case exports.TypeDefInfo.BTreeMap:
        case exports.TypeDefInfo.Enum:
        case exports.TypeDefInfo.HashMap:
        case exports.TypeDefInfo.Result:
        case exports.TypeDefInfo.Set:
        case exports.TypeDefInfo.Struct:
        case exports.TypeDefInfo.Tuple:
          return extractTypes$1(decoded.sub.map(({
            type
          }) => type));

        default:
          throw new Error(`Unhandled: Unable to create and validate type from ${type} (info=${decoded.info})`);
      }
    });
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  const l$1 = util.logger('metadata');
  /** @internal */

  function validateTypes(registry, throwError, types) {
    const missing = flattenUniq(extractTypes$1(types)).filter(type => !registry.hasType(type)).sort();

    if (missing.length !== 0) {
      const message = `Unknown types found, no types for ${missing.join(', ')}`;

      if (throwError) {
        throw new Error(message);
      } else {
        l$1.warn(message);
      }
    }

    return types;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function extractTypes(lookup, types) {
    return types.map(({
      type
    }) => lookup.getTypeDef(type).type);
  }
  /** @internal */


  function extractFieldTypes(lookup, type) {
    return lookup.getSiType(type).def.asVariant.variants.map(({
      fields
    }) => extractTypes(lookup, fields));
  }
  /** @internal */


  function getPalletNames({
    lookup,
    pallets
  }) {
    return pallets.reduce((all, {
      calls,
      constants,
      events,
      storage
    }) => {
      all.push([extractTypes(lookup, constants)]);

      if (calls.isSome) {
        all.push(extractFieldTypes(lookup, calls.unwrap().type));
      }

      if (events.isSome) {
        all.push(extractFieldTypes(lookup, events.unwrap().type));
      }

      if (storage.isSome) {
        all.push(storage.unwrap().items.map(({
          type
        }) => {
          if (type.isPlain) {
            return [lookup.getTypeDef(type.asPlain).type];
          }

          const {
            hashers,
            key,
            value
          } = type.asMap;
          return hashers.length === 1 ? [lookup.getTypeDef(value).type, lookup.getTypeDef(key).type] : [lookup.getTypeDef(value).type, ...lookup.getSiType(key).def.asTuple.map(t => lookup.getTypeDef(t).type)];
        }));
      }

      return all;
    }, []);
  }
  /** @internal */


  function getUniqTypes(registry, meta, throwError) {
    return validateTypes(registry, throwError, flattenUniq(getPalletNames(meta)));
  }

  function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  function trimDocs(docs) {
    const strings = docs.map(d => d.toString().trim());
    const firstEmpty = strings.findIndex(d => !d.length);
    return firstEmpty === -1 ? strings : strings.slice(0, firstEmpty);
  }
  /** @internal */


  function toCallsOnly(registry, {
    extrinsic,
    lookup,
    pallets
  }) {
    return registry.createType('MetadataLatest', {
      extrinsic,
      lookup: {
        types: lookup.types.map(({
          id,
          type
        }) => registry.createType('PortableType', {
          id,
          type: _objectSpread$5(_objectSpread$5({}, type), {}, {
            docs: trimDocs(type.docs)
          })
        }))
      },
      pallets: pallets.map(({
        calls,
        index,
        name
      }) => ({
        calls: registry.createType('Option<PalletCallMetadataLatest>', calls.unwrapOr(null)),
        index,
        name
      }))
    }).toJSON();
  }

  const LATEST_VERSION = 14;
  /**
   * @name MetadataVersioned
   * @description
   * The versioned runtime metadata as a decoded structure
   */

  var _converted = /*#__PURE__*/_classPrivateFieldKey("converted");

  var _assertVersion = /*#__PURE__*/_classPrivateFieldKey("assertVersion");

  var _getVersion = /*#__PURE__*/_classPrivateFieldKey("getVersion");

  var _metadata$1 = /*#__PURE__*/_classPrivateFieldKey("metadata");

  class MetadataVersioned extends Struct {
    constructor(registry, value) {
      super(registry, {
        magicNumber: MagicNumber,
        metadata: 'MetadataAll'
      }, value);
      Object.defineProperty(this, _converted, {
        writable: true,
        value: new Map()
      });
      Object.defineProperty(this, _assertVersion, {
        writable: true,
        value: version => {
          util.assert(this.version <= version, () => `Cannot convert metadata from version ${this.version} to ${version}`);
          return this.version === version;
        }
      });
      Object.defineProperty(this, _getVersion, {
        writable: true,
        value: (version, fromPrev) => {
          const asCurr = `asV${version}`;
          const asPrev = version === 'latest' ? `asV${LATEST_VERSION}` : `asV${version - 1}`;

          if (version !== 'latest' && _classPrivateFieldBase(this, _assertVersion)[_assertVersion](version)) {
            return _classPrivateFieldBase(this, _metadata$1)[_metadata$1]()[asCurr];
          }

          if (!_classPrivateFieldBase(this, _converted)[_converted].has(version)) {
            _classPrivateFieldBase(this, _converted)[_converted].set(version, fromPrev(this.registry, this[asPrev], this.version));
          }

          return _classPrivateFieldBase(this, _converted)[_converted].get(version);
        }
      });
      Object.defineProperty(this, _metadata$1, {
        writable: true,
        value: () => {
          return this.get('metadata');
        }
      });
    }

    /**
     * @description Returns the wrapped metadata as a limited calls-only (latest) version
     */
    get asCallsOnly() {
      return new MetadataVersioned(this.registry, {
        magicNumber: this.magicNumber,
        metadata: this.registry.createType('MetadataAll', toCallsOnly(this.registry, this.asLatest), LATEST_VERSION)
      });
    }
    /**
     * @description Returns the wrapped metadata as a V9 object
     */


    get asV9() {
      _classPrivateFieldBase(this, _assertVersion)[_assertVersion](9);

      return _classPrivateFieldBase(this, _metadata$1)[_metadata$1]().asV9;
    }
    /**
     * @description Returns the wrapped values as a V10 object
     */


    get asV10() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion](10, toV10);
    }
    /**
     * @description Returns the wrapped values as a V11 object
     */


    get asV11() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion](11, toV11);
    }
    /**
     * @description Returns the wrapped values as a V12 object
     */


    get asV12() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion](12, toV12);
    }
    /**
     * @description Returns the wrapped values as a V13 object
     */


    get asV13() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion](13, toV13);
    }
    /**
     * @description Returns the wrapped values as a V14 object
     */


    get asV14() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion](14, toV14);
    }
    /**
     * @description Returns the wrapped values as a latest version object
     */


    get asLatest() {
      return _classPrivateFieldBase(this, _getVersion)[_getVersion]('latest', toLatest);
    }
    /**
     * @description The magicNumber for the Metadata (known constant)
     */


    get magicNumber() {
      return this.get('magicNumber');
    }
    /**
     * @description the metadata version this structure represents
     */


    get version() {
      return _classPrivateFieldBase(this, _metadata$1)[_metadata$1]().index;
    }

    getUniqTypes(throwError) {
      return getUniqTypes(this.registry, this.asLatest, throwError);
    }
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */


    toJSON() {
      // HACK(y): ensure that we apply the aliases if we have not done so already, this is
      // needed to ensure we have the correct overrides (which is only applied in toLatest)
      // eslint-disable-next-line no-unused-expressions
      this.asLatest;
      return super.toJSON();
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const VERSION_IDX = 4; // magic + lowest supported version

  const EMPTY_METADATA = new Uint8Array([0x6d, 0x65, 0x74, 0x61, 9]);
  const EMPTY_U8A = new Uint8Array();

  function toU8a(value = EMPTY_U8A) {
    if (util.isHex(value)) {
      return toU8a(util.u8aToU8a(value));
    } else if (util.isU8a(value)) {
      return value.length === 0 ? EMPTY_METADATA : value;
    }

    throw new Error('Invalid type passed to Metadata constructor');
  }

  function decodeMetadata(registry, _value) {
    if (!_value || util.isU8a(_value) || util.isHex(_value)) {
      const value = toU8a(_value);
      const version = value[VERSION_IDX];

      try {
        return new MetadataVersioned(registry, value);
      } catch (error) {
        // This is an f-ing hack as a follow-up to another ugly hack
        // https://github.com/axia-js/api/commit/a9211690be6b68ad6c6dad7852f1665cadcfa5b2
        // when we fail on V9, try to re-parse it as v10... yes... HACK
        if (version === 9) {
          value[VERSION_IDX] = 10;
          return decodeMetadata(registry, value);
        }

        throw error;
      }
    }

    return new MetadataVersioned(registry, _value);
  }
  /**
   * @name Metadata
   * @description
   * The versioned runtime metadata as a decoded structure
   */


  class Metadata extends MetadataVersioned {
    constructor(registry, value) {
      super(registry, decodeMetadata(registry, value));
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  function decorateConstants(registry, {
    pallets
  }, _metaVersion) {
    return pallets.reduce((result, {
      constants,
      name
    }) => {
      if (constants.isEmpty) {
        return result;
      } // For access, we change the index names, i.e. Democracy.EnactmentPeriod -> democracy.enactmentPeriod


      result[util.stringCamelCase(name)] = constants.reduce((newModule, meta) => {
        const codec = registry.createTypeUnsafe(registry.createLookupType(meta.type), [util.hexToU8a(meta.value.toHex())]);
        codec.meta = meta;
        newModule[util.stringCamelCase(meta.name)] = codec;
        return newModule;
      }, {});
      return result;
    }, {});
  }

  function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  function variantToMeta(lookup, variant) {
    return _objectSpread$4(_objectSpread$4({}, variant), {}, {
      args: variant.fields.map(({
        type
      }) => lookup.getTypeDef(type).type)
    });
  }
  /** @internal */

  function decorateErrors(registry, {
    lookup,
    pallets
  }, metaVersion) {
    return pallets.reduce((result, {
      errors,
      index,
      name
    }, _sectionIndex) => {
      if (!errors.isSome) {
        return result;
      }

      const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;
      result[util.stringCamelCase(name)] = lookup.getSiType(errors.unwrap().type).def.asVariant.variants.reduce((newModule, variant) => {
        // we don't camelCase the error name
        newModule[variant.name.toString()] = {
          is: ({
            error,
            index
          }) => index.eq(sectionIndex) && error.eq(variant.index),
          meta: registry.createType('ErrorMetadataLatest', variantToMeta(lookup, variant))
        };
        return newModule;
      }, {});
      return result;
    }, {});
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function decorateEvents(registry, {
    lookup,
    pallets
  }, metaVersion) {
    return pallets.filter(({
      events
    }) => events.isSome).reduce((result, {
      events,
      index,
      name
    }, _sectionIndex) => {
      const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;
      result[util.stringCamelCase(name)] = lookup.getSiType(events.unwrap().type).def.asVariant.variants.reduce((newModule, variant) => {
        // we don't camelCase the event name
        newModule[variant.name.toString()] = {
          is: eventRecord => eventRecord.index[0] === sectionIndex && variant.index.eq(eventRecord.index[1]),
          meta: registry.createType('EventMetadataLatest', variantToMeta(lookup, variant))
        };
        return newModule;
      }, {});
      return result;
    }, {});
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function isTx(tx, callIndex) {
    return tx.callIndex[0] === callIndex[0] && tx.callIndex[1] === callIndex[1];
  }
  /** @internal */


  function createUnchecked(registry, section, callIndex, callMetadata) {
    const expectedArgs = callMetadata.fields;
    const funcName = util.stringCamelCase(callMetadata.name);

    const extrinsicFn = (...args) => {
      util.assert(expectedArgs.length === args.length, () => `Extrinsic ${section}.${funcName} expects ${expectedArgs.length} arguments, got ${args.length}.`);
      return registry.createType('Call', {
        args,
        callIndex
      }, callMetadata);
    };

    extrinsicFn.is = tx => isTx(tx, callIndex);

    extrinsicFn.callIndex = callIndex;
    extrinsicFn.meta = callMetadata;
    extrinsicFn.method = funcName;
    extrinsicFn.section = section;

    extrinsicFn.toJSON = () => callMetadata.toJSON();

    return extrinsicFn;
  }

  function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  /** @internal */

  function decorateExtrinsics(registry, {
    lookup,
    pallets
  }, metaVersion) {
    return pallets.filter(({
      calls
    }) => calls.isSome).reduce((result, {
      calls,
      index,
      name
    }, _sectionIndex) => {
      const sectionName = util.stringCamelCase(name);
      const sectionIndex = metaVersion >= 12 ? index.toNumber() : _sectionIndex;
      result[sectionName] = lookup.getSiType(calls.unwrap().type).def.asVariant.variants.reduce((newModule, variant) => {
        const callMetadata = registry.createType('FunctionMetadataLatest', _objectSpread$3(_objectSpread$3({}, variant), {}, {
          args: variant.fields.map(({
            name,
            type
          }, index) => ({
            name: util.stringCamelCase(name.unwrapOr(`param${index}`)),
            type: lookup.getTypeDef(type).type
          }))
        }));
        newModule[util.stringCamelCase(callMetadata.name)] = createUnchecked(registry, sectionName, new Uint8Array([sectionIndex, callMetadata.index.toNumber()]), callMetadata);
        return newModule;
      }, {});
      return result;
    }, {});
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  const DEFAULT_FN = data => utilCrypto.xxhashAsU8a(data, 128);

  const HASHERS = {
    Blake2_128: data => // eslint-disable-line camelcase
    utilCrypto.blake2AsU8a(data, 128),
    Blake2_128Concat: data => // eslint-disable-line camelcase
    util.u8aConcat(utilCrypto.blake2AsU8a(data, 128), util.u8aToU8a(data)),
    Blake2_256: data => // eslint-disable-line camelcase
    utilCrypto.blake2AsU8a(data, 256),
    Identity: data => util.u8aToU8a(data),
    Twox128: data => utilCrypto.xxhashAsU8a(data, 128),
    Twox256: data => utilCrypto.xxhashAsU8a(data, 256),
    Twox64Concat: data => util.u8aConcat(utilCrypto.xxhashAsU8a(data, 64), util.u8aToU8a(data))
  };
  /** @internal */

  function getHasher(hasher) {
    return HASHERS[hasher.type] || DEFAULT_FN;
  }

  function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  /** @internal */
  function createKeyRaw(registry, itemFn, keys, hashers, args) {
    return util.u8aConcat(utilCrypto.xxhashAsU8a(itemFn.prefix, 128), utilCrypto.xxhashAsU8a(itemFn.method, 128), ...keys.map((type, index) => getHasher(hashers[index])(registry.createType(registry.createLookupType(type), args[index]).toU8a())));
  }
  /** @internal */


  function createKey(registry, itemFn, keys, hashers, args) {
    const {
      method,
      section
    } = itemFn;
    util.assert(Array.isArray(args), () => `Call to ${util.stringCamelCase(section || 'unknown')}.${util.stringCamelCase(method || 'unknown')} needs ${keys.length} arguments`);
    util.assert(args.filter(a => !util.isUndefined(a)).length === keys.length, () => `Call to ${util.stringCamelCase(section || 'unknown')}.${util.stringCamelCase(method || 'unknown')} needs ${keys.length} arguments, found [${args.join(', ')}]`); // as per createKey, always add the length prefix (underlying it is Bytes)

    return util.compactAddLength(createKeyRaw(registry, itemFn, keys, hashers, args));
  }
  /** @internal */


  function expandWithMeta({
    meta,
    method,
    prefix,
    section
  }, _storageFn) {
    const storageFn = _storageFn;
    storageFn.meta = meta;
    storageFn.method = util.stringLowerFirst(method);
    storageFn.prefix = prefix;
    storageFn.section = section; // explicitly add the actual method in the toJSON, this gets used to determine caching and without it
    // instances (e.g. collective) will not work since it is only matched on param meta

    storageFn.toJSON = () => _objectSpread$2(_objectSpread$2({}, meta.toJSON()), {}, {
      storage: {
        method,
        prefix,
        section
      }
    });

    return storageFn;
  }
  /** @internal */


  function extendHeadMeta(registry, {
    meta: {
      docs,
      name,
      type
    },
    section
  }, {
    method
  }, iterFn) {
    const outputType = registry.createLookupType(type.asMap.key); // metadata with a fallback value using the type of the key, the normal
    // meta fallback only applies to actual entry values, create one for head

    iterFn.meta = registry.createType('StorageEntryMetadataLatest', {
      docs,
      fallback: registry.createType('Bytes'),
      modifier: registry.createType('StorageEntryModifierLatest', 1),
      // required
      name,
      // FIXME???
      type: registry.createType('StorageEntryTypeLatest', outputType, 0)
    });
    return (...args) => registry.createType('StorageKey', iterFn(...args), {
      method,
      section
    });
  }
  /** @internal */


  function extendPrefixedMap(registry, itemFn, storageFn) {
    const {
      meta: {
        type
      },
      method,
      section
    } = itemFn;
    storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (...args) => {
      util.assert(args.length === 0 || type.isMap && args.length < type.asMap.hashers.length, () => `Iteration ${util.stringCamelCase(section || 'unknown')}.${util.stringCamelCase(method || 'unknown')} needs arguments to be at least one less than the full arguments, found [${args.join(', ')}]`);

      if (args.length) {
        if (type.isMap) {
          const {
            hashers,
            key
          } = type.asMap;
          const keysVec = hashers.length === 1 ? [key] : [...registry.lookup.getSiType(key).def.asTuple.map(t => t)];
          const hashersVec = [...hashers];
          return new Raw(registry, createKeyRaw(registry, itemFn, keysVec.slice(0, args.length), hashersVec.slice(0, args.length), args));
        }
      }

      return new Raw(registry, createKeyRaw(registry, itemFn, [], [], []));
    });
    return storageFn;
  }
  /** @internal */


  function createFunction(registry, itemFn, options) {
    const {
      meta: {
        type
      }
    } = itemFn; // Can only have zero or one argument:
    //   - storage.system.account(address)
    //   - storage.timestamp.blockPeriod()
    // For higher-map queries the params are passed in as an tuple, [key1, key2]

    const storageFn = expandWithMeta(itemFn, (...args) => {
      if (type.isPlain) {
        return options.skipHashing ? util.compactAddLength(util.u8aToU8a(options.key)) : createKey(registry, itemFn, [], [], []);
      }

      const {
        hashers,
        key
      } = type.asMap;
      return hashers.length === 1 ? createKey(registry, itemFn, [key], hashers, args) : createKey(registry, itemFn, registry.lookup.getSiType(key).def.asTuple.map(t => t), hashers, args);
    });

    if (type.isMap) {
      extendPrefixedMap(registry, itemFn, storageFn);
    }

    storageFn.keyPrefix = (...args) => storageFn.iterKey && storageFn.iterKey(...args) || util.compactStripLength(storageFn())[1];

    return storageFn;
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors

  function findSiPrimitive(registry, _prim) {
    const prim = _prim.toLowerCase();

    const portable = registry.lookup.types.find(t => t.type.def.isPrimitive && t.type.def.asPrimitive.toString().toLowerCase() === prim || t.type.def.isHistoricMetaCompat && t.type.def.asHistoricMetaCompat.toString().toLowerCase() === prim);
    return portable;
  }

  function findSiType(registry, orig) {
    let portable = findSiPrimitive(registry, orig);

    if (!portable && orig === 'Bytes') {
      const u8 = findSiPrimitive(registry, 'u8');

      if (u8) {
        portable = registry.lookup.types.find(t => t.type.def.isSequence && t.type.def.asSequence.type.eq(u8.id) || t.type.def.isHistoricMetaCompat && t.type.def.asHistoricMetaCompat.eq(orig));
      }
    }

    if (!portable) {
      console.warn(`Unable to map ${orig} to a lookup index`);
    }

    return portable;
  } // Small helper function to factorize code on this page.

  /** @internal */


  function createRuntimeFunction(method, key, {
    docs,
    type
  }) {
    return registry => {
      var _findSiType;

      return createFunction(registry, {
        meta: registry.createType('StorageEntryMetadataLatest', {
          docs: registry.createType('Vec<Text>', [docs]),
          modifier: registry.createType('StorageEntryModifierLatest', 'Required'),
          name: registry.createType('Text', method),
          toJSON: () => key,
          type: registry.createType('StorageEntryTypeLatest', {
            Plain: ((_findSiType = findSiType(registry, type)) === null || _findSiType === void 0 ? void 0 : _findSiType.id) || 0
          })
        }),
        method,
        prefix: 'Substrate',
        section: 'substrate'
      }, {
        key,
        skipHashing: true
      });
    };
  }

  const substrate = {
    changesTrieConfig: createRuntimeFunction('changesTrieConfig', ':changes_trie', {
      docs: ' Changes trie configuration is stored under this key.',
      type: 'u32'
    }),
    childStorageKeyPrefix: createRuntimeFunction('childStorageKeyPrefix', ':child_storage:', {
      docs: ' Prefix of child storage keys.',
      type: 'u32'
    }),
    code: createRuntimeFunction('code', ':code', {
      docs: ' Wasm code of the runtime.',
      type: 'Bytes'
    }),
    extrinsicIndex: createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
      docs: ' Current extrinsic index (u32) is stored under this key.',
      type: 'u32'
    }),
    heapPages: createRuntimeFunction('heapPages', ':heappages', {
      docs: ' Number of wasm linear memory pages required for execution of the runtime.',
      type: 'u64'
    })
  };

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /** @internal */

  function getStorage(registry) {
    return {
      substrate: Object.entries(substrate).reduce((storage, [key, fn]) => {
        storage[key] = fn(registry);
        return storage;
      }, {})
    };
  }

  function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  function decorateStorage(registry, {
    pallets
  }, _metaVersion) {
    return pallets.reduce((result, moduleMetadata) => {
      if (moduleMetadata.storage.isNone) {
        return result;
      }

      const {
        name
      } = moduleMetadata;
      const section = util.stringCamelCase(name);
      const unwrapped = moduleMetadata.storage.unwrap();
      const prefix = unwrapped.prefix.toString(); // For access, we change the index names, i.e. System.Account -> system.account

      result[section] = unwrapped.items.reduce((newModule, meta) => {
        const method = meta.name.toString();
        newModule[util.stringLowerFirst(method)] = createFunction(registry, {
          meta,
          method,
          prefix,
          section
        }, {});
        return newModule;
      }, {});
      return result;
    }, _objectSpread$1({}, getStorage(registry)));
  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  /**
   * Expands the metadata by decoration into consts, query and tx sections
   */

  function expandMetadata(registry, metadata) {
    util.assert(metadata instanceof Metadata, 'You need to pass a valid Metadata instance to Decorated');
    const latest = metadata.asLatest;
    const version = metadata.version;
    return {
      consts: decorateConstants(registry, latest),
      errors: decorateErrors(registry, latest, version),
      events: decorateEvents(registry, latest, version),
      query: decorateStorage(registry, latest),
      tx: decorateExtrinsics(registry, latest, version)
    };
  }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  const l = util.logger('registry'); // create error mapping from metadata

  function injectErrors(_, metadata, metadataErrors) {
    const {
      lookup,
      pallets
    } = metadata.asLatest; // decorate the errors

    pallets.forEach(({
      errors,
      index,
      name
    }, _sectionIndex) => {
      if (errors.isNone) {
        return;
      }

      const sectionIndex = metadata.version >= 12 ? index.toNumber() : _sectionIndex;
      const sectionName = util.stringCamelCase(name);
      lookup.getSiType(errors.unwrap().type).def.asVariant.variants.forEach(({
        docs,
        fields,
        index,
        name
      }) => {
        const variantIndex = index.toNumber();
        const eventIndex = new Uint8Array([sectionIndex, variantIndex]);
        metadataErrors[util.u8aToHex(eventIndex)] = {
          args: fields.map(({
            type
          }) => lookup.getTypeDef(type).type),
          docs: docs.map(d => d.toString()),
          fields,
          index: variantIndex,
          method: name.toString(),
          name: name.toString(),
          section: sectionName
        };
      });
    });
  } // create event classes from metadata


  function injectEvents(registry, metadata, metadataEvents) {
    const {
      lookup,
      pallets
    } = metadata.asLatest; // decorate the events

    pallets.filter(({
      events
    }) => events.isSome).forEach(({
      events,
      index,
      name
    }, _sectionIndex) => {
      const sectionIndex = metadata.version >= 12 ? index.toNumber() : _sectionIndex;
      const sectionName = util.stringCamelCase(name);
      lookup.getSiType(events.unwrap().type).def.asVariant.variants.forEach(variant => {
        const variantIndex = variant.index.toNumber();
        const eventIndex = new Uint8Array([sectionIndex, variantIndex]);
        const meta = registry.createType('EventMetadataLatest', _objectSpread(_objectSpread({}, variant), {}, {
          args: variant.fields.map(({
            type
          }) => lookup.getTypeDef(type).type)
        }));
        metadataEvents[util.u8aToHex(eventIndex)] = class extends GenericEventData {
          constructor(registry, value) {
            super(registry, value, meta, sectionName, variant.name.toString());
          }

        };
      });
    });
  } // create extrinsic mapping from metadata


  function injectExtrinsics(registry, metadata, metadataCalls) {
    const extrinsics = decorateExtrinsics(registry, metadata.asLatest, metadata.version); // decorate the extrinsics

    Object.values(extrinsics).forEach(methods => Object.values(methods).forEach(method => {
      metadataCalls[util.u8aToHex(method.callIndex)] = method;
    }));
  } // extract additional properties from the metadata


  function extractProperties(registry, metadata) {
    var _constants$system;

    const original = registry.getChainProperties();
    const constants = decorateConstants(registry, metadata.asLatest, metadata.version);
    const ss58Format = (_constants$system = constants.system) === null || _constants$system === void 0 ? void 0 : _constants$system.ss58Prefix;

    if (!ss58Format) {
      return original;
    }

    const {
      tokenDecimals,
      tokenSymbol
    } = original || {};
    return registry.createType('ChainProperties', {
      ss58Format,
      tokenDecimals,
      tokenSymbol
    });
  }

  var _classes = /*#__PURE__*/_classPrivateFieldKey("classes");

  var _definitions = /*#__PURE__*/_classPrivateFieldKey("definitions");

  var _metadata = /*#__PURE__*/_classPrivateFieldKey("metadata");

  var _metadataCalls = /*#__PURE__*/_classPrivateFieldKey("metadataCalls");

  var _metadataErrors = /*#__PURE__*/_classPrivateFieldKey("metadataErrors");

  var _metadataEvents = /*#__PURE__*/_classPrivateFieldKey("metadataEvents");

  var _unknownTypes = /*#__PURE__*/_classPrivateFieldKey("unknownTypes");

  var _chainProperties = /*#__PURE__*/_classPrivateFieldKey("chainProperties");

  var _hasher = /*#__PURE__*/_classPrivateFieldKey("hasher");

  var _knownDefaults = /*#__PURE__*/_classPrivateFieldKey("knownDefaults");

  var _knownDefinitions = /*#__PURE__*/_classPrivateFieldKey("knownDefinitions");

  var _knownTypes = /*#__PURE__*/_classPrivateFieldKey("knownTypes");

  var _signedExtensions = /*#__PURE__*/_classPrivateFieldKey("signedExtensions");

  var _userExtensions = /*#__PURE__*/_classPrivateFieldKey("userExtensions");

  class TypeRegistry {
    constructor(createdAtHash) {
      Object.defineProperty(this, _classes, {
        writable: true,
        value: new Map()
      });
      Object.defineProperty(this, _definitions, {
        writable: true,
        value: new Map()
      });
      Object.defineProperty(this, _metadata, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _metadataCalls, {
        writable: true,
        value: {}
      });
      Object.defineProperty(this, _metadataErrors, {
        writable: true,
        value: {}
      });
      Object.defineProperty(this, _metadataEvents, {
        writable: true,
        value: {}
      });
      Object.defineProperty(this, _unknownTypes, {
        writable: true,
        value: new Map()
      });
      Object.defineProperty(this, _chainProperties, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _hasher, {
        writable: true,
        value: utilCrypto.blake2AsU8a
      });
      Object.defineProperty(this, _knownDefaults, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _knownDefinitions, {
        writable: true,
        value: void 0
      });
      Object.defineProperty(this, _knownTypes, {
        writable: true,
        value: {}
      });
      Object.defineProperty(this, _signedExtensions, {
        writable: true,
        value: fallbackExtensions
      });
      Object.defineProperty(this, _userExtensions, {
        writable: true,
        value: void 0
      });
      this.createdAtHash = void 0;
      _classPrivateFieldBase(this, _knownDefaults)[_knownDefaults] = _objectSpread({
        Json,
        Metadata,
        Raw
      }, baseTypes);
      _classPrivateFieldBase(this, _knownDefinitions)[_knownDefinitions] = definitions;
      this.init();

      if (createdAtHash) {
        this.createdAtHash = this.createType('Hash', createdAtHash);
      }
    }

    init() {
      // start clean
      _classPrivateFieldBase(this, _classes)[_classes] = new Map();
      _classPrivateFieldBase(this, _definitions)[_definitions] = new Map();
      _classPrivateFieldBase(this, _unknownTypes)[_unknownTypes] = new Map();
      _classPrivateFieldBase(this, _knownTypes)[_knownTypes] = {}; // register know, first classes then on-demand-created definitions

      this.register(_classPrivateFieldBase(this, _knownDefaults)[_knownDefaults]);
      Object.values(_classPrivateFieldBase(this, _knownDefinitions)[_knownDefinitions]).forEach(({
        types
      }) => this.register(types));
      return this;
    }

    get chainDecimals() {
      var _classPrivateFieldLoo;

      if ((_classPrivateFieldLoo = _classPrivateFieldBase(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo !== void 0 && _classPrivateFieldLoo.tokenDecimals.isSome) {
        const allDecimals = _classPrivateFieldBase(this, _chainProperties)[_chainProperties].tokenDecimals.unwrap();

        if (allDecimals.length) {
          return allDecimals.map(b => b.toNumber());
        }
      }

      return [12];
    }

    get chainSS58() {
      var _classPrivateFieldLoo2;

      return (_classPrivateFieldLoo2 = _classPrivateFieldBase(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo2 !== void 0 && _classPrivateFieldLoo2.ss58Format.isSome ? _classPrivateFieldBase(this, _chainProperties)[_chainProperties].ss58Format.unwrap().toNumber() : undefined;
    }

    get chainTokens() {
      var _classPrivateFieldLoo3;

      if ((_classPrivateFieldLoo3 = _classPrivateFieldBase(this, _chainProperties)[_chainProperties]) !== null && _classPrivateFieldLoo3 !== void 0 && _classPrivateFieldLoo3.tokenSymbol.isSome) {
        const allTokens = _classPrivateFieldBase(this, _chainProperties)[_chainProperties].tokenSymbol.unwrap();

        if (allTokens.length) {
          return allTokens.map(s => s.toString());
        }
      }

      return [util.formatBalance.getDefaults().unit];
    }
    /**
     * @description Returns tru if the type is in a Compat format
     */


    isLookupType(value) {
      return /Lookup\d+$/.test(value);
    }
    /**
     * @description Creates a lookup string from the supplied id
     */


    createLookupType(lookupId) {
      return `Lookup${lookupId.toString()}`;
    }

    get knownTypes() {
      return _classPrivateFieldBase(this, _knownTypes)[_knownTypes];
    }

    get lookup() {
      return this.metadata.lookup;
    }

    get metadata() {
      util.assert(_classPrivateFieldBase(this, _metadata)[_metadata], 'Metadata has not been set on this registry');
      return _classPrivateFieldBase(this, _metadata)[_metadata];
    }

    get unknownTypes() {
      return [..._classPrivateFieldBase(this, _unknownTypes)[_unknownTypes].keys()];
    }

    get signedExtensions() {
      return _classPrivateFieldBase(this, _signedExtensions)[_signedExtensions];
    }
    /**
     * @describe Creates an instance of the class
     */


    createClass(type) {
      return createClass(this, type);
    }
    /**
     * @description Creates an instance of a type as registered
     */


    createType(type, ...params) {
      return this.createTypeUnsafe(type, params);
    }
    /**
     * @description Creates an instance of a type as registered
     */


    createTypeUnsafe(type, params, options) {
      return createTypeUnsafe(this, type, params, options);
    } // find a specific call


    findMetaCall(callIndex) {
      const hexIndex = util.u8aToHex(callIndex);
      return util.assertReturn(_classPrivateFieldBase(this, _metadataCalls)[_metadataCalls][hexIndex], `findMetaCall: Unable to find Call with index ${hexIndex}/[${callIndex.toString()}]`);
    } // finds an error


    findMetaError(errorIndex) {
      const hexIndex = util.u8aToHex(util.isU8a(errorIndex) ? errorIndex : new Uint8Array([errorIndex.index.toNumber(), errorIndex.error.toNumber()]));
      return util.assertReturn(_classPrivateFieldBase(this, _metadataErrors)[_metadataErrors][hexIndex], `findMetaError: Unable to find Error with index ${hexIndex}/[${errorIndex.toString()}]`);
    }

    findMetaEvent(eventIndex) {
      const hexIndex = util.u8aToHex(eventIndex);
      return util.assertReturn(_classPrivateFieldBase(this, _metadataEvents)[_metadataEvents][hexIndex], `findMetaEvent: Unable to find Event with index ${hexIndex}/[${eventIndex.toString()}]`);
    }

    get(name, withUnknown) {
      let Type = _classPrivateFieldBase(this, _classes)[_classes].get(name); // we have not already created the type, attempt it


      if (!Type) {
        const definition = _classPrivateFieldBase(this, _definitions)[_definitions].get(name);

        let BaseType; // we have a definition, so create the class now (lazily)

        if (definition) {
          BaseType = createClass(this, definition);

          _classPrivateFieldBase(this, _classes)[_classes].set(name, BaseType);
        } else if (withUnknown) {
          l.warn(`Unable to resolve type ${name}, it will fail on construction`);

          _classPrivateFieldBase(this, _unknownTypes)[_unknownTypes].set(name, true);

          BaseType = DoNotConstruct.with(name);
        }

        if (BaseType) {
          // NOTE If we didn't extend here, we would have strange artifacts. An example is
          // Balance, with this, new Balance() instanceof u128 is true, but Balance !== u128
          // Additionally, we now pass through the registry, which is a link to ourselves
          Type = class extends BaseType {};

          _classPrivateFieldBase(this, _classes)[_classes].set(name, Type);
        }
      }

      return Type;
    }

    getChainProperties() {
      return _classPrivateFieldBase(this, _chainProperties)[_chainProperties];
    }

    getClassName(Type) {
      const entry = [..._classPrivateFieldBase(this, _classes)[_classes].entries()].find(([, Clazz]) => Type === Clazz);
      return entry ? entry[0] : undefined;
    }

    getDefinition(typeName) {
      return _classPrivateFieldBase(this, _definitions)[_definitions].get(typeName);
    }

    getModuleInstances(specName, moduleName) {
      var _classPrivateFieldLoo4, _classPrivateFieldLoo5, _classPrivateFieldLoo6, _classPrivateFieldLoo7, _classPrivateFieldLoo8;

      return (_classPrivateFieldLoo4 = _classPrivateFieldBase(this, _knownTypes)[_knownTypes]) === null || _classPrivateFieldLoo4 === void 0 ? void 0 : (_classPrivateFieldLoo5 = _classPrivateFieldLoo4.typesBundle) === null || _classPrivateFieldLoo5 === void 0 ? void 0 : (_classPrivateFieldLoo6 = _classPrivateFieldLoo5.spec) === null || _classPrivateFieldLoo6 === void 0 ? void 0 : (_classPrivateFieldLoo7 = _classPrivateFieldLoo6[specName]) === null || _classPrivateFieldLoo7 === void 0 ? void 0 : (_classPrivateFieldLoo8 = _classPrivateFieldLoo7.instances) === null || _classPrivateFieldLoo8 === void 0 ? void 0 : _classPrivateFieldLoo8[moduleName];
    }

    getOrThrow(name, msg) {
      const Clazz = this.get(name);
      util.assert(Clazz, msg || `type ${name} not found`);
      return Clazz;
    }

    getOrUnknown(name) {
      return this.get(name, true);
    }

    getSignedExtensionExtra() {
      return expandExtensionTypes(_classPrivateFieldBase(this, _signedExtensions)[_signedExtensions], 'payload', _classPrivateFieldBase(this, _userExtensions)[_userExtensions]);
    }

    getSignedExtensionTypes() {
      return expandExtensionTypes(_classPrivateFieldBase(this, _signedExtensions)[_signedExtensions], 'extrinsic', _classPrivateFieldBase(this, _userExtensions)[_userExtensions]);
    }

    hasClass(name) {
      return _classPrivateFieldBase(this, _classes)[_classes].has(name);
    }

    hasDef(name) {
      return _classPrivateFieldBase(this, _definitions)[_definitions].has(name);
    }

    hasType(name) {
      return !_classPrivateFieldBase(this, _unknownTypes)[_unknownTypes].get(name) && (this.hasClass(name) || this.hasDef(name));
    }

    hash(data) {
      return this.createType('CodecHash', _classPrivateFieldBase(this, _hasher)[_hasher](data));
    }

    // eslint-disable-next-line no-dupe-class-members
    register(arg1, arg2) {
      // NOTE Constructors appear as functions here
      if (util.isFunction(arg1)) {
        _classPrivateFieldBase(this, _classes)[_classes].set(arg1.name, arg1);
      } else if (util.isString(arg1)) {
        util.assert(util.isFunction(arg2), () => `Expected class definition passed to '${arg1}' registration`);
        util.assert(arg1 !== arg2.toString(), () => `Unable to register circular ${arg1} === ${arg1}`);

        _classPrivateFieldBase(this, _classes)[_classes].set(arg1, arg2);
      } else {
        this._registerObject(arg1);
      }
    }

    _registerObject(obj) {
      Object.entries(obj).forEach(([name, type]) => {
        if (util.isFunction(type)) {
          // This _looks_ a bit funny, but `typeof Clazz === 'function'
          _classPrivateFieldBase(this, _classes)[_classes].set(name, type);
        } else {
          const def = util.isString(type) ? type : util.stringify(type);
          util.assert(name !== def, () => `Unable to register circular ${name} === ${def}`); // we already have this type, remove the classes registered for it

          if (_classPrivateFieldBase(this, _classes)[_classes].has(name)) {
            _classPrivateFieldBase(this, _classes)[_classes].delete(name);
          }

          _classPrivateFieldBase(this, _definitions)[_definitions].set(name, def);
        }
      });
    } // sets the chain properties


    setChainProperties(properties) {
      if (properties) {
        _classPrivateFieldBase(this, _chainProperties)[_chainProperties] = properties;
      }
    }

    setHasher(hasher) {
      _classPrivateFieldBase(this, _hasher)[_hasher] = hasher || utilCrypto.blake2AsU8a;
    }

    setKnownTypes(knownTypes) {
      _classPrivateFieldBase(this, _knownTypes)[_knownTypes] = knownTypes;
    } // sets the metadata


    setMetadata(metadata, signedExtensions, userExtensions) {
      _classPrivateFieldBase(this, _metadata)[_metadata] = metadata.asLatest;
      injectExtrinsics(this, metadata, _classPrivateFieldBase(this, _metadataCalls)[_metadataCalls]);
      injectErrors(this, metadata, _classPrivateFieldBase(this, _metadataErrors)[_metadataErrors]);
      injectEvents(this, metadata, _classPrivateFieldBase(this, _metadataEvents)[_metadataEvents]); // setup the available extensions

      this.setSignedExtensions(signedExtensions || (metadata.asLatest.extrinsic.version.gt(util.BN_ZERO) // FIXME Use the extension and their injected types
      ? metadata.asLatest.extrinsic.signedExtensions.map(({
        identifier
      }) => identifier.toString()) : fallbackExtensions), userExtensions); // setup the chain properties with format overrides

      this.setChainProperties(extractProperties(this, metadata));
    } // sets the available signed extensions


    setSignedExtensions(signedExtensions = fallbackExtensions, userExtensions) {
      _classPrivateFieldBase(this, _signedExtensions)[_signedExtensions] = signedExtensions;
      _classPrivateFieldBase(this, _userExtensions)[_userExtensions] = userExtensions;
      const unknown = findUnknownExtensions(_classPrivateFieldBase(this, _signedExtensions)[_signedExtensions], _classPrivateFieldBase(this, _userExtensions)[_userExtensions]);

      if (unknown.length) {
        l.warn(`Unknown signed extensions ${unknown.join(', ')} found, treating them as no-effect`);
      }
    }

  }

  // Copyright 2017-2021 @axia-js/types authors & contributors
  // SPDX-License-Identifier: Apache-2.0
  // Auto-generated by @axia-js/dev, do not edit
  const packageInfo = {
    name: '@axia-js/types',
    version: '0.1.0'
  };

  exports.BTreeMap = BTreeMap;
  exports.BTreeSet = BTreeSet;
  exports.BitVec = BitVec;
  exports.Bool = bool;
  exports.Bytes = Bytes;
  exports.CodecMap = CodecMap;
  exports.CodecSet = CodecSet;
  exports.Compact = Compact;
  exports.Data = Data;
  exports.DoNotConstruct = DoNotConstruct;
  exports.Enum = Enum;
  exports.GenericAccountId = GenericAccountId;
  exports.GenericAccountIndex = GenericAccountIndex;
  exports.GenericAddress = GenericMultiAddress;
  exports.GenericBlock = GenericBlock;
  exports.GenericCall = GenericCall;
  exports.GenericChainProperties = GenericChainProperties;
  exports.GenericConsensusEngineId = GenericConsensusEngineId;
  exports.GenericEthereumAccountId = GenericEthereumAccountId;
  exports.GenericEthereumLookupSource = GenericEthereumLookupSource;
  exports.GenericEvent = GenericEvent;
  exports.GenericEventData = GenericEventData;
  exports.GenericExtrinsic = GenericExtrinsic;
  exports.GenericExtrinsicEra = GenericExtrinsicEra;
  exports.GenericExtrinsicPayload = GenericExtrinsicPayload;
  exports.GenericExtrinsicPayloadUnknown = GenericExtrinsicPayloadUnknown;
  exports.GenericExtrinsicPayloadV4 = GenericExtrinsicPayloadV4;
  exports.GenericExtrinsicSignatureV4 = GenericExtrinsicSignatureV4;
  exports.GenericExtrinsicUnknown = GenericExtrinsicUnknown;
  exports.GenericExtrinsicV4 = GenericExtrinsicV4;
  exports.GenericImmortalEra = ImmortalEra;
  exports.GenericLookupSource = GenericLookupSource;
  exports.GenericMortalEra = MortalEra;
  exports.GenericMultiAddress = GenericMultiAddress;
  exports.GenericPortableRegistry = GenericPortableRegistry;
  exports.GenericSignerPayload = GenericSignerPayload;
  exports.GenericVote = GenericVote;
  exports.HashMap = HashMap;
  exports.I128 = i128;
  exports.I16 = i16;
  exports.I256 = i256;
  exports.I32 = i32;
  exports.I64 = i64;
  exports.I8 = i8;
  exports.Int = Int;
  exports.Json = Json;
  exports.Linkage = Linkage;
  exports.Map = CodecMap;
  exports.Metadata = Metadata;
  exports.Null = Null;
  exports.Option = Option;
  exports.Range = Range;
  exports.RangeInclusive = RangeInclusive;
  exports.Raw = Raw;
  exports.Result = Result;
  exports.Set = CodecSet;
  exports.StorageKey = StorageKey;
  exports.Struct = Struct;
  exports.Text = Text;
  exports.Tuple = Tuple;
  exports.Type = Type;
  exports.TypeRegistry = TypeRegistry;
  exports.U128 = u128;
  exports.U16 = u16;
  exports.U256 = u256;
  exports.U32 = u32;
  exports.U64 = u64;
  exports.U8 = u8;
  exports.U8aFixed = U8aFixed;
  exports.UInt = UInt;
  exports.USize = usize;
  exports.Vec = Vec;
  exports.VecFixed = VecFixed;
  exports.bool = bool;
  exports.createClass = createClass;
  exports.createType = createType;
  exports.createTypeUnsafe = createTypeUnsafe;
  exports.decorateConstants = decorateConstants;
  exports.decorateExtrinsics = decorateExtrinsics;
  exports.decorateStorage = decorateStorage;
  exports.encodeTypeDef = encodeTypeDef;
  exports.expandMetadata = expandMetadata;
  exports.getTypeClass = getTypeClass;
  exports.getTypeDef = getTypeDef;
  exports.i128 = i128;
  exports.i16 = i16;
  exports.i256 = i256;
  exports.i32 = i32;
  exports.i64 = i64;
  exports.i8 = i8;
  exports.packageInfo = packageInfo;
  exports.paramsNotation = paramsNotation;
  exports.rpcDefinitions = jsonrpc$1;
  exports.typeDefinitions = definitions;
  exports.typeSplit = typeSplit;
  exports.u128 = u128;
  exports.u16 = u16;
  exports.u256 = u256;
  exports.u32 = u32;
  exports.u64 = u64;
  exports.u8 = u8;
  exports.unwrapStorageType = unwrapStorageType;
  exports.usize = usize;
  exports.withTypeString = withTypeString;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, axiaUtil, axiaUtilCrypto);
