// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod parser;
mod reader;

#[tauri::command]
fn parse_markdown(path: &str) {
    let content = reader::read(path);
    parser::parse(content.unwrap().as_str());
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![parse_markdown])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
