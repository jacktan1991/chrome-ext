abstact_p = $("div.block-record-info.block-record-info-source").next().find('p');

if (abstact_p.length > 0){
  // 抽取纯净文本
  abstact_p_text = abstact_p.html().replace(/<[^>]+>/g,"");

  annotate_url = "http://spotlight.sztaki.hu:2222/rest/annotate"
  abstact_p.on("click.fetch.annotated", function(){
    $.get(annotate_url, {text: abstact_p_text}, function(html_data){
      abstact_p.off("click.fetch.annotated");
      abstact_p.on("click.show.annotated", function(event, html_data){
        if (html_data) {
          show_annotated($(this), html_data);
        }
      });

      abstact_p.trigger("click.show.annotated", html_data);
    });
  });
}
