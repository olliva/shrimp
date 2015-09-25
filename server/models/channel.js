import mongoose from 'mongoose';
import faker from 'faker';
import {isEmpty, getAll, getToObjectOptions} from './utils';

const channel = new mongoose.Schema({
  name: String,
  isFavourite: Boolean,
});

channel.statics.getAll = getAll;
channel.statics.isEmpty = isEmpty;
channel.set('toObject', getToObjectOptions());

channel.statics.createTestChannel = function createTestChannel() {
  return new this({
    name: faker.hacker.noun(),
    isFavourite: faker.random.boolean(),
  });
};

export default function getChannelModel() {
  return mongoose.model('Channel', channel);
}
