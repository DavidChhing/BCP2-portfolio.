'use strict'

var projects = [];

function Projects(rawDataObject) {
    this.completeDate = rawDataObject.completeDate;
    this.projectName = rawDataObject.projectName;
    this.body = rawDataObject.projectInfo;
}

Projects.prototype.toHtml = function() {
    var template = $('#project-template').html();
    var compile = Handlebars.compile($template);
    $('main').append(compile(this));
    return template(this);
};




