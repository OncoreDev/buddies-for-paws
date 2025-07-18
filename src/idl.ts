export type BonkPaws = {
  "version": "0.1.0",
  "name": "bonk_paws",
  "instructions": [
    {
      "name": "donate",
      "accounts": [
        {
          "name": "donor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "charity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "donationHistory",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_history"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "donor"
              }
            ]
          }
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "solDonation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "matchDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonk",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsol",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "MatchDonationState",
                "path": "match_donation_state.seed"
              }
            ]
          }
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "finalizeDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "matchKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsol",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "MatchDonationState",
                "path": "match_donation_state.seed"
              }
            ]
          },
          "relations": [
            "match_key"
          ]
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "donateBonk",
      "accounts": [
        {
          "name": "donor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "donorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "charity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "charityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "bonkDonationHistory",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_history"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "donor"
              }
            ]
          }
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "bonkDonation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "bonkMatchDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonk",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "BonkMatchDonationState",
                "path": "bonk_match_donation_state.seed"
              }
            ]
          }
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "bonkFinalizeDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "matchKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "matchTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "BonkMatchDonationState",
                "path": "bonk_match_donation_state.seed"
              }
            ]
          },
          "relations": [
            "match_key"
          ]
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "donationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bonkBurned",
            "type": "u64"
          },
          {
            "name": "solDonated",
            "type": "u64"
          },
          {
            "name": "solMatched",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "matchDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "matchKey",
            "type": "publicKey"
          },
          {
            "name": "seed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "donationHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "donor",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bonkDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bonkBurned",
            "type": "u64"
          },
          {
            "name": "bonkDonated",
            "type": "u64"
          },
          {
            "name": "bonkMatched",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bonkMatchDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "matchKey",
            "type": "publicKey"
          },
          {
            "name": "seed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bonkDonationHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "donor",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "SharedAccountsRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "inAmount",
            "type": "u64"
          },
          {
            "name": "quotedOutAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ExactOutRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "quotedInAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "SharedAccountsExactOutRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "quotedInAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "RoutePlanStep",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swap",
            "type": {
              "defined": "Swap"
            }
          },
          {
            "name": "percent",
            "type": "u8"
          },
          {
            "name": "inputIndex",
            "type": "u8"
          },
          {
            "name": "outputIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "Swap",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Saber"
          },
          {
            "name": "SaberAddDecimalsDeposit"
          },
          {
            "name": "SaberAddDecimalsWithdraw"
          },
          {
            "name": "TokenSwap"
          },
          {
            "name": "Sencha"
          },
          {
            "name": "Step"
          },
          {
            "name": "Cropper"
          },
          {
            "name": "Raydium"
          },
          {
            "name": "Crema",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Lifinity"
          },
          {
            "name": "Mercurial"
          },
          {
            "name": "Cykura"
          },
          {
            "name": "Serum",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "MarinadeDeposit"
          },
          {
            "name": "MarinadeUnstake"
          },
          {
            "name": "Aldrin",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "AldrinV2",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Whirlpool",
            "fields": [
              {
                "name": "a_to_b",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Invariant",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Meteora"
          },
          {
            "name": "GooseFX"
          },
          {
            "name": "DeltaFi",
            "fields": [
              {
                "name": "stable",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Balansol"
          },
          {
            "name": "MarcoPolo",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Dradex",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "LifinityV2"
          },
          {
            "name": "RaydiumClmm"
          },
          {
            "name": "Openbook",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Phoenix",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Symmetry",
            "fields": [
              {
                "name": "from_token_id",
                "type": "u64"
              },
              {
                "name": "to_token_id",
                "type": "u64"
              }
            ]
          },
          {
            "name": "TokenSwapV2"
          },
          {
            "name": "HeliumTreasuryManagementRedeemV0"
          },
          {
            "name": "StakeDexStakeWrappedSol"
          },
          {
            "name": "StakeDexSwapViaStake",
            "fields": [
              {
                "name": "bridge_stake_seed",
                "type": "u32"
              }
            ]
          },
          {
            "name": "GooseFXV2"
          },
          {
            "name": "Perps"
          },
          {
            "name": "PerpsAddLiquidity"
          },
          {
            "name": "PerpsRemoveLiquidity"
          },
          {
            "name": "MeteoraDlmm"
          },
          {
            "name": "OpenBookV2",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "RaydiumClmmV2"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Overflow",
      "msg": "Overflow"
    },
    {
      "code": 6001,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6002,
      "name": "MissingSwapIx",
      "msg": "Swap IX not found"
    },
    {
      "code": 6003,
      "name": "MissingFinalizeIx",
      "msg": "Finalize IX not found"
    },
    {
      "code": 6004,
      "name": "MissingDonateIx",
      "msg": "Donate IX not found"
    },
    {
      "code": 6005,
      "name": "ProgramMismatch",
      "msg": "Invalid Program ID"
    },
    {
      "code": 6006,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6007,
      "name": "InvalidRoute",
      "msg": "Invalid number of routes"
    },
    {
      "code": 6008,
      "name": "InvalidSlippage",
      "msg": "Invalid slippage"
    },
    {
      "code": 6009,
      "name": "InvalidSolanaAmount",
      "msg": "Invalid Solana amount"
    },
    {
      "code": 6010,
      "name": "InvalidBonkMint",
      "msg": "Invalid BONK mint address"
    },
    {
      "code": 6011,
      "name": "InvalidBonkAccount",
      "msg": "Invalid BONK account"
    },
    {
      "code": 6012,
      "name": "InvalidBonkATA",
      "msg": "Invalid BONK ATA"
    },
    {
      "code": 6013,
      "name": "InvalidwSolMint",
      "msg": "Invalid wSOL mint address"
    },
    {
      "code": 6014,
      "name": "InvalidwSolATA",
      "msg": "Invalid wSOL ATA"
    },
    {
      "code": 6015,
      "name": "InvalidwSolAccount",
      "msg": "Invalid wSOL account"
    },
    {
      "code": 6016,
      "name": "InvalidwSolBalance",
      "msg": "Invalid wSOL balance"
    },
    {
      "code": 6017,
      "name": "InvalidCharityAddress",
      "msg": "Invalid charity address"
    },
    {
      "code": 6018,
      "name": "InvalidCharityId",
      "msg": "Invalid charity Id"
    },
    {
      "code": 6019,
      "name": "InvalidLamportsBalance",
      "msg": "Invalid lamports balance"
    },
    {
      "code": 6020,
      "name": "InvalidInstructionIndex",
      "msg": "Invalid instruction index"
    },
    {
      "code": 6021,
      "name": "SignatureHeaderMismatch",
      "msg": "Signature header mismatch"
    },
    {
      "code": 6022,
      "name": "SignatureAuthorityMismatch",
      "msg": "Signature authority mismatch"
    },
    {
      "code": 6023,
      "name": "NotMatchingDonation",
      "msg": "Not enough SOL Donated to Match"
    },
    {
      "code": 6024,
      "name": "InvalidMatchKey",
      "msg": "Invalid Match Key"
    }
  ]
};

export const IDL: BonkPaws = {
  "version": "0.1.0",
  "name": "bonk_paws",
  "instructions": [
    {
      "name": "donate",
      "accounts": [
        {
          "name": "donor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "charity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "donationHistory",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_history"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "donor"
              }
            ]
          }
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "solDonation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "matchDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonk",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsol",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "MatchDonationState",
                "path": "match_donation_state.seed"
              }
            ]
          }
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "finalizeDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "matchKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "wsol",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerWsol",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "donationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "donation_state"
              }
            ]
          }
        },
        {
          "name": "matchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "MatchDonationState",
                "path": "match_donation_state.seed"
              }
            ]
          },
          "relations": [
            "match_key"
          ]
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "donateBonk",
      "accounts": [
        {
          "name": "donor",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "donorTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "charity",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "charityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "isOptional": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              }
            ]
          }
        },
        {
          "name": "bonkDonationHistory",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_history"
              },
              {
                "kind": "arg",
                "type": "u64",
                "path": "seed"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "donor"
              }
            ]
          }
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "seeds",
          "type": "u64"
        },
        {
          "name": "bonkDonation",
          "type": "u64"
        }
      ]
    },
    {
      "name": "bonkMatchDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "bonk",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "BonkMatchDonationState",
                "path": "bonk_match_donation_state.seed"
              }
            ]
          }
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "bonkFinalizeDonation",
      "accounts": [
        {
          "name": "signer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "matchKey",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "matchTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signerBonk",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "bonkDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_donation_state"
              }
            ]
          }
        },
        {
          "name": "bonkMatchDonationState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "bonk_match_donation"
              },
              {
                "kind": "account",
                "type": "u64",
                "account": "BonkMatchDonationState",
                "path": "bonk_match_donation_state.seed"
              }
            ]
          },
          "relations": [
            "match_key"
          ]
        },
        {
          "name": "instructions",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "donationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bonkBurned",
            "type": "u64"
          },
          {
            "name": "solDonated",
            "type": "u64"
          },
          {
            "name": "solMatched",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "matchDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "matchKey",
            "type": "publicKey"
          },
          {
            "name": "seed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "donationHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "donor",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "bonkDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bonkBurned",
            "type": "u64"
          },
          {
            "name": "bonkDonated",
            "type": "u64"
          },
          {
            "name": "bonkMatched",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bonkMatchDonationState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "matchKey",
            "type": "publicKey"
          },
          {
            "name": "seed",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "bonkDonationHistory",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "donor",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "donationAmount",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "SharedAccountsRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "inAmount",
            "type": "u64"
          },
          {
            "name": "quotedOutAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ExactOutRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "quotedInAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "SharedAccountsExactOutRoute",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u8"
          },
          {
            "name": "routePlan",
            "type": {
              "vec": {
                "defined": "RoutePlanStep"
              }
            }
          },
          {
            "name": "outAmount",
            "type": "u64"
          },
          {
            "name": "quotedInAmount",
            "type": "u64"
          },
          {
            "name": "slippageBps",
            "type": "u16"
          },
          {
            "name": "platformFeeBps",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "RoutePlanStep",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swap",
            "type": {
              "defined": "Swap"
            }
          },
          {
            "name": "percent",
            "type": "u8"
          },
          {
            "name": "inputIndex",
            "type": "u8"
          },
          {
            "name": "outputIndex",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "Side",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Bid"
          },
          {
            "name": "Ask"
          }
        ]
      }
    },
    {
      "name": "Swap",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Saber"
          },
          {
            "name": "SaberAddDecimalsDeposit"
          },
          {
            "name": "SaberAddDecimalsWithdraw"
          },
          {
            "name": "TokenSwap"
          },
          {
            "name": "Sencha"
          },
          {
            "name": "Step"
          },
          {
            "name": "Cropper"
          },
          {
            "name": "Raydium"
          },
          {
            "name": "Crema",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Lifinity"
          },
          {
            "name": "Mercurial"
          },
          {
            "name": "Cykura"
          },
          {
            "name": "Serum",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "MarinadeDeposit"
          },
          {
            "name": "MarinadeUnstake"
          },
          {
            "name": "Aldrin",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "AldrinV2",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Whirlpool",
            "fields": [
              {
                "name": "a_to_b",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Invariant",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Meteora"
          },
          {
            "name": "GooseFX"
          },
          {
            "name": "DeltaFi",
            "fields": [
              {
                "name": "stable",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Balansol"
          },
          {
            "name": "MarcoPolo",
            "fields": [
              {
                "name": "x_to_y",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Dradex",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "LifinityV2"
          },
          {
            "name": "RaydiumClmm"
          },
          {
            "name": "Openbook",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Phoenix",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "Symmetry",
            "fields": [
              {
                "name": "from_token_id",
                "type": "u64"
              },
              {
                "name": "to_token_id",
                "type": "u64"
              }
            ]
          },
          {
            "name": "TokenSwapV2"
          },
          {
            "name": "HeliumTreasuryManagementRedeemV0"
          },
          {
            "name": "StakeDexStakeWrappedSol"
          },
          {
            "name": "StakeDexSwapViaStake",
            "fields": [
              {
                "name": "bridge_stake_seed",
                "type": "u32"
              }
            ]
          },
          {
            "name": "GooseFXV2"
          },
          {
            "name": "Perps"
          },
          {
            "name": "PerpsAddLiquidity"
          },
          {
            "name": "PerpsRemoveLiquidity"
          },
          {
            "name": "MeteoraDlmm"
          },
          {
            "name": "OpenBookV2",
            "fields": [
              {
                "name": "side",
                "type": {
                  "defined": "Side"
                }
              }
            ]
          },
          {
            "name": "RaydiumClmmV2"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "Overflow",
      "msg": "Overflow"
    },
    {
      "code": 6001,
      "name": "InvalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6002,
      "name": "MissingSwapIx",
      "msg": "Swap IX not found"
    },
    {
      "code": 6003,
      "name": "MissingFinalizeIx",
      "msg": "Finalize IX not found"
    },
    {
      "code": 6004,
      "name": "MissingDonateIx",
      "msg": "Donate IX not found"
    },
    {
      "code": 6005,
      "name": "ProgramMismatch",
      "msg": "Invalid Program ID"
    },
    {
      "code": 6006,
      "name": "InvalidInstruction",
      "msg": "Invalid instruction"
    },
    {
      "code": 6007,
      "name": "InvalidRoute",
      "msg": "Invalid number of routes"
    },
    {
      "code": 6008,
      "name": "InvalidSlippage",
      "msg": "Invalid slippage"
    },
    {
      "code": 6009,
      "name": "InvalidSolanaAmount",
      "msg": "Invalid Solana amount"
    },
    {
      "code": 6010,
      "name": "InvalidBonkMint",
      "msg": "Invalid BONK mint address"
    },
    {
      "code": 6011,
      "name": "InvalidBonkAccount",
      "msg": "Invalid BONK account"
    },
    {
      "code": 6012,
      "name": "InvalidBonkATA",
      "msg": "Invalid BONK ATA"
    },
    {
      "code": 6013,
      "name": "InvalidwSolMint",
      "msg": "Invalid wSOL mint address"
    },
    {
      "code": 6014,
      "name": "InvalidwSolATA",
      "msg": "Invalid wSOL ATA"
    },
    {
      "code": 6015,
      "name": "InvalidwSolAccount",
      "msg": "Invalid wSOL account"
    },
    {
      "code": 6016,
      "name": "InvalidwSolBalance",
      "msg": "Invalid wSOL balance"
    },
    {
      "code": 6017,
      "name": "InvalidCharityAddress",
      "msg": "Invalid charity address"
    },
    {
      "code": 6018,
      "name": "InvalidCharityId",
      "msg": "Invalid charity Id"
    },
    {
      "code": 6019,
      "name": "InvalidLamportsBalance",
      "msg": "Invalid lamports balance"
    },
    {
      "code": 6020,
      "name": "InvalidInstructionIndex",
      "msg": "Invalid instruction index"
    },
    {
      "code": 6021,
      "name": "SignatureHeaderMismatch",
      "msg": "Signature header mismatch"
    },
    {
      "code": 6022,
      "name": "SignatureAuthorityMismatch",
      "msg": "Signature authority mismatch"
    },
    {
      "code": 6023,
      "name": "NotMatchingDonation",
      "msg": "Not enough SOL Donated to Match"
    },
    {
      "code": 6024,
      "name": "InvalidMatchKey",
      "msg": "Invalid Match Key"
    }
  ]
};
