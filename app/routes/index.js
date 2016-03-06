import Ember from 'ember';

export default Ember.Route.extend({
    /**
     * Sets Model for root index page
     * @returns Mock REST API
     */
    model: function () {
        var url = 'http://jsonplaceholder.typicode.com/users';
        return Ember.$.getJSON(url);
    }
});
