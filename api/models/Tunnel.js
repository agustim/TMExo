/**
* Tunnel.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    public_ip : { type: 'string' },

    internal_ip : { type: 'string' },

    internal_route : { type: 'string' },

    guifi_ip : { type: 'string' },

    owner: { model: 'user' }
  }
};
