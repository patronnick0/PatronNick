$files = @(
"js/supabase.js",
"js/fonts.js",
"js/generator.js",
"js/categorias.js",
"js/favoritos.js",
"js/cards.js",
"js/ui.js",
"js/ranking.js",
"js/freefire.js",
"js/script.js"
)

$utf8 = New-Object System.Text.UTF8Encoding($false)
$partes = @()

foreach ($f in $files) {
    $texto = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    $partes += "/* === $([System.IO.Path]::GetFileName($f)) === */`r`n$texto`r`n"
}

[System.IO.File]::WriteAllText(
    (Join-Path (Get-Location) "js/app.js"),
    ($partes -join "`r`n"),
    $utf8
)

Write-Host "app.js actualizado correctamente en UTF-8 ✅"