import Ember from 'ember';

export default Ember.Route.extend({
    /**
     * Sets Model for User Details Page
     * @param params
     * @returns user by user.id
     */
    model: function (params) {
        var url = 'http://jsonplaceholder.typicode.com/users/' + params.user_id;
        return Ember.$.getJSON(url);
    }
});
