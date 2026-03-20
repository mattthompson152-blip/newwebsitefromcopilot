{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 // ======================================\
// LIGHT / DARK THEME TOGGLE\
// ======================================\
\
// Get toggle element\
const themeToggle = document.getElementById("theme-toggle");\
\
// Load saved mode from localStorage\
const savedTheme = localStorage.getItem("theme");\
\
// Apply saved mode\
if (savedTheme === "light") \{\
\'a0\'a0\'a0 document.body.classList.add("light-mode");\
\}\
\
// Toggle theme on click\
themeToggle.addEventListener("click", () => \{\
\'a0\'a0\'a0 document.body.classList.toggle("light-mode");\
\
\'a0\'a0\'a0 // Save mode after toggle\
\'a0\'a0\'a0 if (document.body.classList.contains("light-mode")) \{\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 localStorage.setItem("theme", "light");\
\'a0\'a0\'a0 \} else \{\
\'a0\'a0\'a0\'a0\'a0\'a0\'a0 localStorage.setItem("theme", "dark");\
\'a0\'a0\'a0 \}\
\});\
}