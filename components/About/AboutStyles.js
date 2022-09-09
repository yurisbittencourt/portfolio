import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    background-position: 0px ;
  }
  to {
    background-position: 1920px ;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.colors.sky};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3E%3Cg mask='url(&quot;%23SvgjsMask1506&quot;)' fill='none'%3E%3Cpath d='M1984 1080L0 1080 L0 367.94Q98.4 370.34, 96 468.74Q174.75 451.49, 192 530.23Q235.67 413.9, 352 457.58Q351.77 361.35, 448 361.11Q471.38 288.49, 544 311.86Q600.21 272.07, 640 328.28Q726.43 254.71, 800 341.15Q931.27 312.42, 960 443.7Q1014.16 401.87, 1056 456.03Q1138.3 442.32, 1152 524.62Q1161.98 374.6, 1312 384.57Q1360.75 273.32, 1472 322.06Q1540.26 230.32, 1632 298.58Q1702.28 272.86, 1728 343.13Q1767.46 286.59, 1824 326.05Q1892.56 234.61, 1984 303.16z' fill='rgba(225, 235, 245, 1)'%3E%3C/path%3E%3Cpath d='M1984 1080L0 1080 L0 707.54Q-61.37 550.16, 96 488.79Q304.54 537.33, 256 745.86Q212.35 606.21, 352 562.56Q402.56 453.12, 512 503.67Q577.3 472.97, 608 538.26Q739.67 509.93, 768 641.6Q889.95 603.55, 928 725.5Q985.16 622.66, 1088 679.82Q1207.03 638.86, 1248 757.89Q1264.09 613.97, 1408 630.06Q1448.56 510.62, 1568 551.18Q1640.59 463.76, 1728 536.35Q1765.43 477.79, 1824 515.22Q1934.28 465.5, 1984 575.77z' fill='rgba(240, 245, 250, 1)'%3E%3C/path%3E%3Cpath d='M2080 1080L0 1080 L0 939.8Q48.16 891.96, 96 940.12Q107.26 855.38, 192 866.65Q242.32 756.97, 352 807.29Q389.42 748.71, 448 786.14Q467.06 709.2, 544 728.27Q606.35 630.62, 704 692.97Q796.33 625.3, 864 717.62Q986.16 679.78, 1024 801.94Q1109.9 791.85, 1120 877.75Q1182.11 843.86, 1216 905.97Q1288.64 882.62, 1312 955.26Q1343.86 827.12, 1472 858.97Q1544.36 771.33, 1632 843.69Q1693.83 809.52, 1728 871.34Q1739.87 787.21, 1824 799.08Q1815.6 694.68, 1920 686.28Q2036.36 642.63, 2080 758.99z' fill='rgba(255, 255, 255, 1)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1506'%3E%3Crect width='1920' height='1080' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E");
  background-size: cover;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 50px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Gap = styled.div`
  width: ${(props) => (props.size ? props.size : "20px")};
  height: ${(props) => (props.size ? props.size : "20px")};
`;

export const Title = styled.h1`
  margin: 0 0 30px 0;
`;

export const Description = styled.p``;
