class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeIcon = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // listen for close click
    this.closeIcon.addEventListener("click", () => this.closeTheModal())

    // pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal()
    }
  }

  openTheModal() {
    this.modal.classList.add("modal--is-visible")
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  injectHTML() {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin" style="margin:0"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
          <div class="columna-right">
            <h2 style="color: #e86000; text-align: center; margin-bottom: 0px; margin-top: 5px">Formulario de Contacto</h2>

            <!-- formulario de contacto -->

                <form action="envia.php" method="post" class="form-consulta" style="padding-top: 10px"> 
                    <label>Nombre y apellido: <span>*</span>
                        <input type="text" name="nombre" placeholder="Nombre y apellido" class="campo-form" required>
                    </label>
                    
                    <label>Email: <span>*</span>
                        <input type="email" name="email" placeholder="Email" class="campo-form" required>
                    </label>
                    
                    <label>Consulta:
                        <textarea name="consulta" class="campo-form"></textarea>
                    </label>

                    <input type="submit" value="Enviar" class="btn-form">
                </form>

            <!-- formulario -->
          </div>
      </div>

      <div class="social-icons">
        <a href="https://www.facebook.com/Faster_deliverypty-107551567637868/" class="social-icons__icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
        <a href="https://twitter.com/" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="https://www.instagram.com/faster_deliverypty/" class="social-icons__icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
        <a href="https://www.youtube.com/" class="social-icons__icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `)
  }
}

export default Modal