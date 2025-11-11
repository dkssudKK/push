Add-Type -AssemblyName System.Drawing

function New-GradientBrush {
    param (
        [System.Drawing.Rectangle]$Rectangle,
        [System.Drawing.Color]$StartColor,
        [System.Drawing.Color]$EndColor
    )

    return New-Object System.Drawing.Drawing2D.LinearGradientBrush(
        $Rectangle,
        $StartColor,
        $EndColor,
        [System.Drawing.Drawing2D.LinearGradientMode]::Vertical
    )
}

function New-PlaceholderImage {
    param (
        [string]$Path,
        [int]$Width,
        [int]$Height,
        [System.Drawing.Color]$StartColor,
        [System.Drawing.Color]$EndColor,
        [string]$Title,
        [string]$Subtitle,
        [System.Drawing.Color]$AccentColor
    )

    $bitmap = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.SmoothingMode = 'AntiAlias'
    $graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

    $backgroundRect = New-Object System.Drawing.Rectangle(0, 0, $Width, $Height)
    $backgroundBrush = New-GradientBrush -Rectangle $backgroundRect -StartColor $StartColor -EndColor $EndColor
    $graphics.FillRectangle($backgroundBrush, $backgroundRect)

    $accentBrush = New-Object System.Drawing.SolidBrush($AccentColor)
    $accentPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 255, 255, 255), 2)

    $cardWidth = [int]($Width * 0.7)
    $cardHeight = [int]($Height * 0.55)
    $cardX = [int](($Width - $cardWidth) / 2)
    $cardY = [int]($Height * 0.2)
    $cardRect = New-Object System.Drawing.Rectangle($cardX, $cardY, $cardWidth, $cardHeight)

    $cardBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(180, 16, 21, 30))
    $graphics.FillRectangle($cardBrush, $cardRect)
    $graphics.DrawRectangle($accentPen, $cardRect)

    $headerRect = New-Object System.Drawing.Rectangle($cardX, $cardY - 80, $cardWidth, 60)
    $headerBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(120, 16, 21, 30))
    $graphics.FillRectangle($headerBrush, $headerRect)

    for ($i = 0; $i -lt 6; $i++) {
        $barX = $cardX + 40 + ($i * 80)
        $barHeight = Get-Random -Minimum 60 -Maximum ($cardHeight - 120)
        $barY = $cardY + $cardHeight - $barHeight - 50
        $barRect = New-Object System.Drawing.Rectangle($barX, $barY, 48, $barHeight)
        $graphics.FillRectangle($accentBrush, $barRect)
    }

    $titleFont = New-Object System.Drawing.Font('Segoe UI', 36, [System.Drawing.FontStyle]::Bold)
    $subtitleFont = New-Object System.Drawing.Font('Segoe UI', 18)
    $whiteBrush = [System.Drawing.Brushes]::White
    $subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(210, 255, 255, 255))

    $graphics.DrawString($Title, $titleFont, $whiteBrush, 80, 70)
    $graphics.DrawString($Subtitle, $subtitleFont, $subBrush, 84, 125)

    $chipRect = New-Object System.Drawing.Rectangle($cardX + 40, $cardY - 60, 140, 36)
    $chipBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 255, 255, 255))
    $graphics.FillRectangle($chipBrush, $chipRect)
    $graphics.DrawString('DASHBOARD', $subtitleFont, $whiteBrush, $cardX + 48, $cardY - 58)

    $bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)

    $graphics.Dispose()
    $bitmap.Dispose()
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$imageDir = Join-Path $root '..\img'

if (-not (Test-Path $imageDir)) {
    New-Item -ItemType Directory -Path $imageDir | Out-Null
}

New-PlaceholderImage `
    -Path (Join-Path $imageDir 'budget-dashboard.png') `
    -Width 1353 `
    -Height 768 `
    -StartColor ([System.Drawing.Color]::FromArgb(255, 18, 23, 34)) `
    -EndColor ([System.Drawing.Color]::FromArgb(255, 8, 10, 16)) `
    -Title '예산 관리 대시보드' `
    -Subtitle '월 예산, 지출 현황, 카테고리별 요약' `
    -AccentColor ([System.Drawing.Color]::FromArgb(255, 255, 174, 58))

New-PlaceholderImage `
    -Path (Join-Path $imageDir 'furniture-landing.png') `
    -Width 1353 `
    -Height 768 `
    -StartColor ([System.Drawing.Color]::FromArgb(255, 40, 103, 91)) `
    -EndColor ([System.Drawing.Color]::FromArgb(255, 28, 73, 67)) `
    -Title 'KATAHI 가구 컬렉션' `
    -Subtitle '따뜻한 색감과 조명으로 구성한 프리미엄 랜딩 페이지' `
    -AccentColor ([System.Drawing.Color]::FromArgb(255, 232, 153, 97))

