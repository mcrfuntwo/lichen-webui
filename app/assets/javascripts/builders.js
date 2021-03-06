this.Builders = {};

Builders.make_profile_vm = function (pm, fn) {
  var vm = {
    id: pm.id,
    name: ko.observable(pm.name),
    owner: ko.observable(pm.owner),
    users: ko.observableArray(pm.users),
    criteria: ko.observableArray(pm.criteria),
    url: Routes.profile_path(pm.id)
  };

  vm.is_owner = ko.computed(function() {
    return vm.owner().id === user.id;
  });

  return _.assignIn(vm, fn(vm));
};
