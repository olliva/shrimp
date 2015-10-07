import io from 'socket.io-client';
import store from '../store';
import {Map} from 'immutable';
import {addChannel, addUserToChannel} from '../actions/channels';
import {addMessage} from '../actions/messages';
import {init, initUser} from '../actions/local';
import {SC} from '../../constants';


export function socketClient(type = null, socketData) {
  const socket = io();

  if (type === 'SOCKET_INIT') {
    socket.on(SC.ADD_MESSAGE, (data) => {
      store.dispatch(addMessage(Map(data)));
    });

    socket.on(SC.ADD_CHANNEL, (data) => {
      store.dispatch(addChannel(Map({id: data.id, name: data.name})));
    });

    socket.on(SC.INIT, (data) => {
      store.dispatch(init(data));
    });

    socket.on(SC.SIGN_IN, (data) => {
      store.dispatch(initUser(data));
    });

    socket.on(SC.JOIN_TO_CHANNEL, (data) => {
      store.dispatch(addUserToChannel(data));
    });
  } else if (type) {
    socket.emit(type, socketData);
  }
}
