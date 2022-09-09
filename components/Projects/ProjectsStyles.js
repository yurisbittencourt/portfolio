import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 50px 20px;
  background-color: ${(props) => props.theme.colors.sky};
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1920 1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cmask id='SvgjsMask1539'%3E%3Crect width='1920' height='1080' fill='%23ffffff'/%3E%3C/mask%3E%3C/defs%3E%3Cg mask='url(%23SvgjsMask1539)' fill='none' transform='matrix(-1, 0, 0, -1, 1920, 1908)'%3E%3Cpath d='M1984 1080L0 1080 L0 908.37Q74.47 822.84, 160 897.3Q192.82 834.12, 256 866.93Q329.22 844.15, 352 917.37Q420.61 825.98, 512 894.59Q584.45 807.04, 672 879.48Q781.46 828.94, 832 938.41Q888.58 834.99, 992 891.57Q1064.32 803.89, 1152 876.22Q1222.53 850.75, 1248 921.28Q1279.29 856.57, 1344 887.85Q1429.66 813.51, 1504 899.18Q1567.96 803.14, 1664 867.1Q1768.31 811.41, 1824 915.72Q1911.71 843.43, 1984 931.14z' fill='rgba(225, 235, 245, 1)'/%3E%3Cpath d='M1952 1080L0 1080 L0 942.31Q55.05 901.36, 96 956.4Q153.23 917.63, 192 974.86Q247.49 934.35, 288 989.84Q308.14 913.98, 384 934.12Q438.87 892.99, 480 947.85Q575.76 883.62, 640 979.38Q681.88 925.26, 736 967.15Q766.8 901.95, 832 932.75Q902.49 907.24, 928 977.72Q998.97 888.69, 1088 959.67Q1148.63 860.3, 1248 920.93Q1309.67 886.6, 1344 948.27Q1430.52 874.79, 1504 961.31Q1563.94 861.25, 1664 921.2Q1744.8 906, 1760 986.79Q1784.74 915.53, 1856 940.27Q1912.99 901.26, 1952 958.26z' fill='rgba(240, 245, 250, 1)'/%3E%3Cpath d='M2016 1080L0 1080 L0 1006.78Q89.72 936.5, 160 1026.21Q181.09 951.3, 256 972.38Q321.02 941.4, 352 1006.43Q447.33 941.76, 512 1037.1Q539.44 968.53, 608 995.97Q647.3 939.27, 704 978.57Q786.25 964.82, 800 1047.06Q854.97 942.02, 960 996.99Q997.09 938.08, 1056 975.16Q1159.68 918.84, 1216 1022.52Q1305.13 951.64, 1376 1040.77Q1427.08 931.85, 1536 982.93Q1623.01 909.94, 1696 996.95Q1794.92 935.87, 1856 1034.79Q1925.58 944.37, 2016 1013.94z' fill='rgba(255, 255, 255, 1)'/%3E%3C/g%3E%3Crect y='-0.419' width='1920.14' height='828.837' style='stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255); fill-rule: nonzero; paint-order: fill;'/%3E%3C/svg%3E");
  background-size: cover;
  background-position: bottom;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 430px;
  padding: 15px;
  border-radius: 5px;
  background-color: rgba(135, 206, 235, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Title = styled.h1`
  margin: 30px 0;
`;

export const SubTitle = styled.h2``;

export const Description = styled.p`
  margin: 15px 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 300px;
  border-radius: 5px;
`;

export const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
    background-color: rgb(135, 206, 235, 0.5);
    border-radius: 5px;
    color: white;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: start;
`;
