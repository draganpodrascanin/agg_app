export class ResponseAlert {
  constructor(element, status, options) {
    this.element = element;
    this.status = status;
    this.options = options;
    this.alert = document.createElement('div');

    //response with error if arguments provided are invalid
    if (!this.element)
      return console.error('need to provide element where to append alert');
    if (!this.status)
      return console.error(
        'no status provided for alert. avalible status - "msg-success", "msg-fail", "msg-warn", "custom"'
      );
    if (
      this.status !== 'msg-success' &&
      this.status !== 'msg-fail' &&
      this.status !== 'msg-warn' &&
      this.status !== 'custom'
    )
      return console.error(
        'status for ResponseAlert is invalid, available statuses - "msg-success", "msg-fail", "msg-warn", "custom"'
      );
    if (
      this.status === 'custom' &&
      (!this.options.class || !this.options.innerHTML)
    )
      return console.error('options need class and innerHTML properties.');
  }

  render() {
    this.element.appendChild(this.alert);

    switch (this.status) {
      case 'msg-success':
        this.alert.className = 'alert alert-success';
        this.alert.innerHTML = '<p>Poruka uspešno poslata.</p>';
        break;
      case 'msg-fail':
        this.alert.className = 'alert alert-fail';
        this.alert.innerHTML = `<p>Nešto nije uredu. Molimo Vas pokušajte malo kasnije. <br/>
                        Možete takođe da pozovete na broj <a href="tel:+38765701308">065 701 308</a>. <br/>
                        Ili da nas kontaktirate direktno na email info@autogasgaga.ba</p>`;
        break;
      case 'msg-warn':
        this.alert.className = 'alert alert-warn';
        this.alert.innerHTML = `<p>Molimo Vas sačekajte malo, pre nego što ponovo pošaljete poruku.</p>`;
        break;
      case 'custom':
        this.alert.className = `alert ${this.options.class}`;
        this.alert.innerHTML = this.options.innerHTML;
      default:
        return console.error(
          'status of alert can be only "msg-success", "msg-fail", "msg-warn" or "custom"'
        );
    }
  }

  delete() {
    this.alert.remove();
  }
}
