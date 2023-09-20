use std::fs;

/// The function `read` reads the contents of a file specified by the `path` parameter and returns it as
/// a `Result` with the content as a `String` or an error.
/// 
/// Arguments:
/// 
/// * `path`: The `path` parameter is a string that represents the file path of the file you want to
/// read.
/// 
/// Returns:
/// 
/// The function `read` returns a `Result` type with the success variant containing a `String` if the
/// file is successfully read, and the error variant containing a `Box<dyn std::error::Error>` if there
/// is an error while reading the file.
pub fn read(path: &str) -> Result<String, Box<dyn std::error::Error>> {
    match fs::read_to_string(path) {
        Ok(file_content) => Ok(file_content),
        Err(error) => Err(error.into()),
    }
}

