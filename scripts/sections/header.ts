$('./body') {
  insert_top("header", class: "_header") {
    insert("a", href: "/"){
          insert("img", src:asset("images/Techsouplogo2.jpg"))
    }

  }
}

$("/html/head"){
  insert('link', href:"http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700ita...' rel='stylesheet' type='text/css'")
}
#c0392b
#16a085
