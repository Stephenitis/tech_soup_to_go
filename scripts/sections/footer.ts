$("./body") {
  insert_bottom("footer", class: "_footer") {
    $("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 's-snw-link', ' ' ))]"){
      move_to("/html/body/footer")
    }
  }
}
