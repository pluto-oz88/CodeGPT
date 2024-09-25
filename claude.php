<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horizontal Slide Carousel</title>
    <link rel="stylesheet" href="css/claude.css">
</head>
<body>
    <div class="carousel-container">
        <div class="carousel">
            <?php
            for ($i = 1; $i <= 10; $i++) {
                echo "<div class='slide' style='background-color: hsl(" . ($i * 36) . ", 70%, 50%);'>";
                echo "<span class='slide-number'>Slide " . $i . "</span>";
                echo "</div>";
            }
            ?>
        </div>
        <a href="page1.php" class="btn">Go to Page 1</a>
    </div>
    <script src="js/claude.js"></script>
</body>
</html>