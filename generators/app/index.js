'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red('generator-react-compoment')} generator!`
      )
    );

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Input your component name ?',
        default: 'Hello'
      },
      {
        type: 'input',
        name: 'libName',
        message: 'Input your library name ?',
        default: 'ui',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath('**/*'), this.destinationPath('.'), {
      componentName: this.props.componentName,
      libName: this.props.libName
    });

    this.fs.copy(this.templatePath('**/.*'), this.destinationPath('.'));
  }

  install() {
    this.installDependencies({
      yarn: true,
      npm: false,
      bower: false
    });
  }
};
