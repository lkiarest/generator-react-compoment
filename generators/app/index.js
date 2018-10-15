'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red('generator-react-component')} generator!`
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
        default: 'shein-components',
        store: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const componentName = this.props.componentName;

    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath(`./${componentName}`),
      {
        componentName,
        libName: this.props.libName
      }
    );

    this.fs.copy(this.templatePath('**/.*'), this.destinationPath(`./${componentName}`));
  }

  install() {
    this.installDependencies({
      yarn: true,
      npm: false,
      bower: false
    });
  }
};
