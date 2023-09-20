pub fn parse(src: &str) -> String {
    let parser = &mut markdown_it::MarkdownIt::new();
    markdown_it::plugins::cmark::add(parser);
    markdown_it::plugins::extra::add(parser);

    let ast = parser.parse(src);
    let html = ast.render();
    html
}