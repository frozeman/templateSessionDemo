if (Meteor.isClient) {
  Template.hello.created = function () {
    TemplateSession.set.call(this, 'myText', 'Wooohooo');
  };

  Template.hello.greeting = function () {
    return "Welcome to templateStoreDemo.";
  };

  Template.hello.myHelper = function () {
    return TemplateSession.get('myText');
  };

  Template.hello.events({
    'click input': function (e, template) {

      TemplateSession.set.call(template, 'myText', 'JOJOJO');
    }
  });
}