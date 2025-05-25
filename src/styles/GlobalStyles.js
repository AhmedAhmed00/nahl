import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Indigo */
  --color-primary:#7F82BE ;
  --color-secondary:
  --color-light: #F9F9F9 ;
  --color-grey: #888888 ;
  --color-text:#212121;
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-yellow-900:rgb(234, 165, 16);
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  html {
    font-size: 62.5%;
    direction: ${({ theme }) => theme.direction || "ltr"};
    font-family: ${({ theme }) =>
      theme.direction === "rtl"
        ? '"Cairo", sans-serif'
        : '"Montserrat", sans-serif'};
  }
/* Width and height of the scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* Track (the background of the scrollbar) */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: var(--color-grey-200);
}

/* Handle (the draggable part) */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
    background: var(--color-primary);

}



body {



  color: var(--color-grey-700);
  background-color: #F9F9F9;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}




img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
.react-datepicker{ 
  font-size: 11px;
  

}
.react-datepicker__year-wrapper{ 
  gap: 10px 0px;
}
.react-datepicker-year-header{ 
  font-size: 12px;

}

.react-tel-input .form-control{ 
  background-color: red;
  height: 40px;
  width: 100%;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: ${({ theme }) => (theme.direction === "ltr" ? "0 0 0 7.2rem !important" : "")};
  box-shadow: var(--shadow-sm);
}

.flag { 
  right: 27px;
}
.react-tel-input .selected-flag{ 
  width: 60px;
}




.rbc-month-view {
      height: 100vh;
}
.rbc-calendar {
    min-height: 580px;
}
.rbc-calendar {
  direction: rtl;
  text-align: right;
}

.rbc-event{ 
  text-align:start;
}




${"" /*  */}

.rbc-header {
  color: white;
  font-size: 14px !important;
  padding:6px;

  background:rgb(98, 133, 159);
}

${
  "" /* .rbc-allday-cell {
  display: none;
} */
}

.rbc-time-header-cell .rbc-today {
  background-color: #04aa6d !important;
}

.rbc-time-slot {
  color: #74a4c3;
  z-index: 1;
}

.rbc-time-slot:not(.rbc-today .rbc-time-slot) {
  background-color: #eff4f7;
}

.rbc-event,
.rbc-background-event {
  z-index: 1;
  padding: 0px !important;
  border: none !important;
}

.rbc-event-label {
  display: none !important;
}

.rbc-events-container {
  width: 100% !important;
}
.rbc-toolbar-label{ 
  font-size:19px;
  margin-bottom:10px
}

.rbc-day-slot .rbc-time-slot:after {
  content: "";
  width: 100%;
  border-top: 1px solid #fbb3ec;
  display: block;

  }


.rbc-btn-group> button{ 
  background-color: var(--color-primary);
  color:white;
  border-radius:8px  !important;
  border:none;
  outline:none;
  padding:3px 16px;
  margin:0px 3px;
  font-size:14px;
  
}

.rbc-toolbar button:active, .rbc-toolbar button.rbc-active{ 
  color:black;
  border:none
}

.rbc-toolbar button:active:hover, .rbc-toolbar button:active:focus, .rbc-toolbar button.rbc-active:hover, .rbc-toolbar button.rbc-active:focus{ 
  border:none;
  outline:none;
}










`;

export default GlobalStyles;
