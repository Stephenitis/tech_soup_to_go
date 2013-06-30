$("./body") {
  add_class("_home")

  $("//header") {
    insert_after("div", class: "content", id: "mycontent") {
    }
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
$$("#ctl00_PlaceHolderMain_Editmodepanel2_ProductListingDiv"){
  move_to("//*[@id='mycontent']")
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

$("/html/body/header") {
  insert("div", id: "navMenu") {
    attributes(data-ur-set: "tabs")

    $("//h3[@class='s-fn-title-item']"){
      move_to("//div[@id='navMenu']")
      attributes(data-ur-tabs-component: "button", data-ur-tab-id: index())
    }

    $("//ul[@class='s-fn-sub-menu-item']"){
      log("======================sajlfalskfsadasdjasdlkjaslkdjsa666666")
      move_to("//div[@id='navMenu']")
      attributes(data-ur-tabs-component: "content", data-ur-tab-id: index())
    }
  }
}


$$(".s-fn-browse-by"){
  remove()
}
$$(".mod-social-network"){
  remove()
}

$$(".mod-first-nav"){
  remove()
}
