$("./body") {
  add_class("_home")
  insert_top("div", class: "content") {
  }
  $("//*[@id='aspnetForm']/div[4]/div/div/div[3]/div[3]"){
    move_to("/html/body/div[1]")
  }
  $("//*[@id='aspnetForm']/div[4]/div/div/div[1]"){
    move_to("/html/body/div[1]")
  }
  $("//*[@id='aspnetForm']/div[4]/div/div/div[2]/div[1]/div[1]/a"){
    move_to("/html/body/div[1]")
  }
  $("//*[@id='aspnetForm']/div[4]/div/div/div[2]/div[1]/div[2]/section"){
    move_to("/html/body/div[1]")
  }
}

$("./body") {
  insert("div", id: "navMenu") {
    attribute("data-ur-set","tabs")

    $("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 's-fn-wrapper-item', ' ' )) and (((count(preceding-sibling::*) + 1) = 1) and parent::*)]//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 's-fn-sub-item-link', ' ' ))]"){
          attribute("data-ur-tabs-component","content")
          attribute("data-ur-tabs-id","one")
      }

    $$(".s-fn-item-link span"){
      attribute("data-ur-tabs-component", "button")
      attribute("data-ur-tabs-id","one")
    }
  }
}














$("//*[@id='aspnetForm']"){
    remove()
}

$("//*[(@id = 'ctl00_ContentPlaceHolder_footer_MasterFooter_LinkCategoryList_ctrl3_divFooterItemMenu')]") {
  remove()
}
$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 'mod-wpz-4col', ' ' ))]") {
  remove()
}
$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 'grid-4col', ' ' ))]"){
  remove()
}

$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 's-ms-sub-sect-wrapper', ' ' ))]") {
  remove()
}

$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 'mod-second-nav', ' ' ))]") {
  remove()
}

$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 'bg-shadow-down-medium', ' ' ))]"){
  remove()
}
$("
  //*[contains(concat( ' ', @class, ' ' ), concat( ' ', 'bg-footer-extra', ' ' ))]") {
  remove()
}
$("//*[contains(concat( ' ', @class, ' ' ), concat( ' ', 's-fn-wrapper-top', ' ' ))]") {
  remove()
}

$("//*[@id='aspnetForm']/div[4]/div/div/div[3]/div[3]/nav/div"){

}
