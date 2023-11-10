// Prevents additional console window on Windows in release, DO NOT REMOVE!! 97F0642D37EAC70D972DDFC4C38F41DC181B
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod parser;
mod reader;

#[tauri::command]
fn parse_markdown(path: &str) {
    let content = reader::read(path);
    println!("Ran, {}", path);
    parser::parse(content.unwrap().as_str());
}

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello {}!", name)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![parse_markdown, greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
