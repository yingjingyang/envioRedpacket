/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  HappyRedPacketContract,
  HappyRedPacket_ClaimSuccessEntity,
  HappyRedPacket_CreationSuccessEntity,
  HappyRedPacket_RefundSuccessEntity,
} from "generated";

HappyRedPacketContract.ClaimSuccess.handler(({ event, context }) => {
  const entity: HappyRedPacket_ClaimSuccessEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    event_id: event.params.id,
    claimer: event.params.claimer,
    claimed_value: event.params.claimed_value,
    token_address: event.params.token_address,
    lock: event.params.lock,
  };

  context.HappyRedPacket_ClaimSuccess.set(entity);
});

HappyRedPacketContract.CreationSuccess.handler(({ event, context }) => {
  const entity: HappyRedPacket_CreationSuccessEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    total: event.params.total,
    event_id: event.params.id,
    name: event.params.name,
    message: event.params.message,
    creator: event.params.creator,
    creation_time: event.params.creation_time,
    token_address: event.params.token_address,
    number: event.params.number,
    ifrandom: event.params.ifrandom,
    duration: event.params.duration,
    lock: event.params.lock,
  };

  context.HappyRedPacket_CreationSuccess.set(entity);
});

HappyRedPacketContract.RefundSuccess.handler(({ event, context }) => {
  const entity: HappyRedPacket_RefundSuccessEntity = {
    id: `${event.transactionHash}_${event.logIndex}`,
    event_id: event.params.id,
    token_address: event.params.token_address,
    remaining_balance: event.params.remaining_balance,
    lock: event.params.lock,
  };

  context.HappyRedPacket_RefundSuccess.set(entity);
});
