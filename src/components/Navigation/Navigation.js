import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import hamburgerIcon from "../../assets/icons/bars-solid.svg"

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.6em;
  font-family: "Cormorant Garamond", sans-serif;
  padding: 1.5em 3em;
  background: #e9e5dd;
  z-index: 55;

  @media screen and (max-width: 700px) {
    justify-content: space-between;
    padding: 1em;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    display: inline;
    padding: 0;
    font-size: 1em;
    font-weight: 600;
  }

  svg {
    height: 60px;
    width: 80px;
    margin-left: 1em;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }

  transition: 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`

const NavigationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-weight: 100;
  font-size: 0.8em;

  li {
    margin-left: 3em;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    :hover {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 1200px) {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 955;
    background: #e9e5dd;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: ${({ open }) => (open ? "flex" : "none")};

    li {
      margin: 1em 0;
    }
  }
`

const Hamburger = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 25px;
    height: 25px;
    position: relative;
    z-index: 999;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const activeLink = {
  fontWeight: 700,
  textDecoration: "underline",
}

const Navigation = () => {
  const [isNavOpened, setNav] = useState(false)

  return (
    <NavigationWrapper>
      <Logo>
        <Link onClick={() => setNav(false)} to="/">
          <h1>FALOWANIE</h1>
          <svg
            preserveAspectRatio="xMidYMid meet"
            id="comp-kai433c6svgcontent"
            data-bbox="8.008 57.997 183.992 84.004"
            viewBox="8.008 57.997 183.992 84.004"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
          >
            <g>
              <path
                d="M88.819 124.965c-.704.035-1.41.116-2.113.097-1.623-.044-2.769.468-2.987 2.275-.052.434-.274.846-.378 1.277-.275 1.133-.269 1.03.821.996 1.327-.042 2.662.105 3.991.201.136.01.345.216.361.35.018.15-.104.397-.237.472-1.28.719-2.54 1.468-4.098 1.454-1.595-.014-1.628.027-1.673 1.662-.03 1.089.083 2.183.048 3.272-.009.275-.339.54-.522.81-.144-.239-.377-.464-.418-.721-.374-2.316-.166-4.611.399-6.868 1.216-4.86 3.089-9.446 5.956-13.575.507-.73.538-1.269.222-2.084-.896-2.314-2.078-4.558-2.228-7.097-.039-.651.209-1.319.326-1.979.495.371 1.062.677 1.471 1.127 1.19 1.309 1.792 2.918 2.138 4.629.05.249-.028.53.048.766.148.464.363.907.55 1.359.298-.325.554-.705.901-.964.795-.596.713-1.286.506-2.154-.533-2.235-1.095-4.483-1.352-6.759-.168-1.492.14-3.046.321-4.562.037-.31.426-.74.72-.805.225-.05.657.331.827.62 1.92 3.261 2.812 6.689 1.57 10.435-.073.221-.062.47-.09.706.218-.069.474-.088.648-.217 1.132-.842 2.276-1.675 3.346-2.592.251-.215.359-.752.325-1.122-.242-2.671-.745-5.337-.744-8.005 0-1.879.653-3.76 1.041-5.634.049-.236.238-.453.393-.656.979-1.274 1.766-1.222 2.239.315 1.281 4.171 1.865 8.357-.386 12.439-.143.26-.197.57-.293.856.342-.069.715-.071 1.02-.217 2.532-1.212 5.033-2.489 7.585-3.656.671-.307.676-.713.512-1.204-.595-1.789-1.392-3.527-1.813-5.354-.368-1.595-.359-3.282-.453-4.932-.019-.342.186-.739.388-1.043.544-.818 1.15-.861 1.638-.033.514.873.936 1.82 1.261 2.782.448 1.327.797 2.69 1.131 4.051.328 1.336.215 2.663-.258 3.96-.075.205-.073.439-.107.659.232-.064.483-.09.693-.197 1.423-.728 2.834-1.482 4.258-2.209.574-.293.602-.586.347-1.208-1.327-3.227-2.112-6.562-1.661-10.092.041-.318.006-.656.103-.953.216-.667.84-.854 1.313-.312.578.662 1.222 1.392 1.457 2.203.529 1.828.99 3.71 1.147 5.598.083 1-.533 2.056-.823 3.09-.047.167-.038.349-.055.525.155-.023.338 0 .461-.075.873-.532 1.853-.964 2.558-1.669.533-.533.978-1.418.992-2.156.037-1.912-.176-3.829-.31-5.743-.087-1.242.048-2.445.711-3.514.74-1.194 1.393-1.184 2.009.118.897 1.896 1.132 3.919.611 5.972-.202.796-.571 1.549-.841 2.329-.054.155-.004.347-.002.521.161-.047.34-.064.481-.146 1.265-.738 1.595-2.144 2.113-3.316 1.321-2.989 3.197-5.539 5.52-7.778.721-.695 1.699-1.726 2.624-1.195.918.527.183 1.765-.061 2.63-.769 2.733-2.405 4.916-4.616 6.652-1.154.907-2.407 1.686-3.591 2.556-.225.166-.333.491-.496.742.263.131.516.348.791.381 2.354.284 4.441 1.134 6.286 2.659.56.463.447.779.008.989-.613.293-1.341.628-1.972.551-2.405-.293-4.874-.468-6.985-1.856-.996-.655-1.857-.64-2.722.185-.277.264-.624.453-.91.708-.379.337-.443.56.198.675.753.135 1.487.376 2.224.59 3.022.876 5.213 2.882 7.128 5.265.483.601.277 1.016-.391 1.009-1.077-.011-2.206-.027-3.218-.345-2.905-.913-5.456-2.5-7.649-4.612-1.265-1.218-1.359-1.004-2.422-.306-1.047.687-2.081 1.394-3.121 2.092.995.436 2.014.823 2.98 1.316 2.762 1.41 4.364 3.884 5.741 6.515.396.756.9 1.897-.01 2.397-.594.326-1.801.034-2.474-.392-1.289-.815-2.487-1.832-3.554-2.93-1.607-1.653-3.107-3.416-4.574-5.197-.543-.66-.979-.828-1.768-.453-1.79.849-3.625 1.604-5.434 2.414-.146.065-.234.26-.349.394.132.099.257.275.396.286 4.066.332 7.181 2.493 10.014 5.198.232.222.512.415.675.68.147.24.165.559.24.843-.296.076-.595.229-.887.217-2.702-.108-5.376-.386-7.852-1.603-2.007-.987-4-2.001-6.02-2.961-.342-.162-.914-.296-1.164-.125-2.642 1.802-5.417 3.442-7.563 5.882-.165.187-.271.426-.404.642.292-.017.606.03.874-.06 4.863-1.636 9.459-.64 13.953 1.392.719.325.594.853.073 1.129-.885.469-1.828.95-2.8 1.113-3.364.565-6.736.181-10.095-.18-1.325-.142-2.639-.383-3.964-.524-.258-.028-.682.117-.795.316a274.97 274.97 0 0 0-3.383 6.196c-.064.12.047.333.076.502.11-.062.235-.107.327-.19 2.868-2.569 6.494-2.815 10.045-3.214.864-.097 1.77.27 2.663.321 1.126.065 2.258.014 3.386.038.219.005.435.126.653.194-.123.26-.179.659-.381.757-1.716.834-3.391 1.883-5.21 2.345-2.646.671-5.403.906-8.112 1.327l-.043-.28z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M74.369 134.955c-.439-2.838-.906-5.671-1.301-8.515-.115-.825-.406-.785-1.096-.612-2.869.722-5.715.718-8.43-.654-.365-.185-.96-.602-.915-.774.11-.423.451-.923.837-1.114 2.012-.997 4.104-.695 6.185-.211.748.174 1.488.381 2.235.561.521.126.678.049.446-.555-.707-1.836-1.353-3.696-1.988-5.558-.281-.824-.544-.891-1.314-.371-2.555 1.725-5.398 2.642-8.512 2.539-.406-.014-.805-.242-1.207-.371.148-.391.194-.885.464-1.151a6.895 6.895 0 0 1 1.687-1.224c2.01-1.021 4.113-1.775 6.39-1.922.865-.056 1.004-.405.458-1.065-.287-.346-.548-.715-.845-1.051-.638-.721-1.202-1.837-1.969-2.005-.572-.126-1.423.97-2.135 1.54-1.813 1.453-3.785 2.601-6.062 3.15-.556.134-1.129.198-1.698.272-.782.101-.894-.25-.592-.894 1.01-2.151 2.83-3.438 4.849-4.471.902-.461 1.881-.789 2.85-1.095 1.261-.398 1.295-.384.329-1.384-.846-.876-1.762-1.684-2.621-2.548-.567-.571-.893-.401-1.357.186-1.268 1.601-2.54 3.215-3.97 4.665-.787.798-1.876 1.316-2.871 1.884-.61.348-.955.116-.9-.643.119-1.642.993-2.946 2.083-4.013 1.177-1.153 2.572-2.09 3.914-3.063.792-.575.844-.633.023-1.056-1.02-.526-2.064-1.003-3.095-1.509-.691-.339-1.184-.216-1.541.521-.972 2.005-1.978 3.993-2.97 5.989-.312.627-.56 1.298-.954 1.868-.215.311-.751.693-1.005.612-.326-.103-.67-.618-.727-.997-.1-.67-.09-1.393.054-2.055.54-2.481 1.537-4.739 3.477-6.475.508-.454.956-.789-.164-1.059-.792-.191-1.518-.644-2.281-.962-.582-.242-.844-.111-1.072.58-.575 1.743-1.22 3.479-2.031 5.122-.41.83-1.199 1.497-1.899 2.149-.516.481-.915.268-.992-.475-.174-1.687-.052-3.329.815-4.845.254-.444.504-.895.703-1.365.103-.244.093-.536.134-.807-.234.057-.481.084-.701.175-3.079 1.282-6.302.939-9.499.834-.438-.014-.868-.22-1.304-.33-.544-.138-.582-.378-.196-.769 1.485-1.504 3.502-1.75 5.39-2.289 1.902-.543 3.813-.288 5.722.001.361.055.733.031 1.1.044-.176-.309-.315-.647-.533-.922-1.847-2.325-3.298-4.856-4.089-7.74-.05-.184-.177-.35-.213-.535-.15-.783.236-1.176.962-.809a9.15 9.15 0 0 1 2.31 1.659c2.246 2.243 3.508 5.004 3.908 8.139.076.598.211.829.816 1.036 1.504.514 2.951 1.196 4.426 1.796.149.061.337.026.507.036-.046-.159-.058-.341-.145-.473-.95-1.444-1.282-3.051-1.282-4.749 0-1.989-.001-3.977.01-5.966.002-.383.031-.774.113-1.146.035-.16.252-.408.361-.396.211.024.492.155.59.328.344.61.652 1.245.92 1.893 1.268 3.062 1.982 6.177 1.139 9.515-.363 1.437-.18 1.608 1.227 2.34.057.03.106.074.164.1.873.394 1.746.787 2.62 1.179-.172-.904-.392-1.801-.506-2.712-.378-3.012-.191-6.002.516-8.952.102-.424.35-.816.555-1.211.286-.551.636-.358.84.026.265.498.566 1.044.602 1.586.205 3.049.337 6.103.488 9.156.013.256.056.55-.045.765-.975 2.082-.095 3.509 1.59 4.681.367.256.699.564 1.038.858.416.36.824.73 1.236 1.095.017-.576.067-1.152.046-1.726-.157-4.199 1.068-8.073 2.76-11.837.07-.156.253-.406.327-.388.222.055.509.175.601.356.201.394.376.833.422 1.268.23 2.158.5 4.317-.039 6.477-.601 2.411-1.161 4.828-2.325 7.059-.149.286-.072.86.129 1.129.845 1.125 1.778 2.184 2.678 3.268.427.514.676.199.749-.224.535-3.106 2.885-5.053 4.674-7.353.198-.255.633-.326.957-.483.026.351.1.706.069 1.052-.309 3.484-2.181 6.221-4.299 8.815-.469.574-.557.973-.242 1.664.715 1.568 1.295 3.197 1.936 4.8.069.172.173.331.261.495.105-.156.225-.303.312-.468 1.932-3.642 4.736-6.492 7.996-8.953.756-.571 1.335-1.374 2.02-2.044.142-.139.395-.163.597-.24.082.217.229.432.237.653.086 2.303-.865 4.261-2.236 5.99-2.103 2.653-4.004 5.508-7.116 7.204-.846.461-1.289 1.19-.964 2.504.639 2.583.872 5.272 1.185 7.928.111.945-.008 1.922-.088 2.879-.013.159-.36.291-.552.436-.129-.179-.362-.354-.369-.539-.039-.899-.018-1.8-.018-2.701.082-.01.159-.022.236-.033z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M39.461 112.014c-.127 1.078-.22 2.161-.395 3.231-.102.625-.053 1.132.476 1.545.353.277.68.59 1.001.905.624.613 1.236 1.24 1.852 1.861.145-.879.352-1.753.423-2.638.139-1.748 1.01-3.153 1.999-4.506.17-.232.616-.55.725-.483.29.176.641.533.655.832.053 1.144.12 2.317-.071 3.435-.311 1.81-.857 3.579-1.222 5.382-.089.438-.021 1.08.248 1.388.929 1.06 1.971 2.022 2.99 2.999.168.161.44.214.664.317-.015-.278.007-.565-.052-.834-.568-2.579.244-4.938 1.16-7.274.075-.191.442-.452.555-.404.249.106.586.378.602.603.109 1.529.185 3.062.182 4.594-.001.626-.276 1.246-.336 1.878-.094.988-.537 2.355-.067 2.895.826.949 2.211 1.432 3.401 2.03.456.229.516-.067.314-.466-1.45-2.862-.416-5.755-.074-8.636.022-.182.294-.471.443-.467.19.005.512.236.54.408.49 3.002 1.645 5.941.987 9.057-.174.822.09 1.212.861 1.378.247.053.475.2.722.252.801.17 1.606.316 2.41.472-.229-.688-.487-1.368-.683-2.066-.541-1.929-.825-3.896-.594-5.897.041-.352.433-.664.664-.994.249.25.612.456.729.758.964 2.498 2.023 4.981 2.006 7.732-.004.713.205.635.883.651 2.127.052 4.283.222 6.356.676 1.432.313 1.998 1.71 2.199 3.111.08.56-.004 1.146-.028 1.719-.004.105-.076.208-.117.312-.15-.071-.405-.116-.431-.218a14.954 14.954 0 0 1-.324-1.693c-.187-1.413-1.023-2.354-2.39-2.618-.313-.061-.654.003-.959-.078-2.112-.56-3.361.022-4.534 2.113-1.42 2.531-3.355 4.876-6.034 6.357-1.293.715-1.962.406-1.883-1.062.045-.842.346-1.848.894-2.449 1.2-1.317 2.62-2.434 3.973-3.607.385-.333.86-.56 1.268-.869.129-.098.248-.314.233-.462-.012-.117-.221-.271-.368-.308-1.237-.31-2.5-.533-3.712-.917-.612-.194-.946-.155-1.22.428-.712 1.513-1.916 2.573-3.365 3.298-1.705.853-3.477 1.573-5.232 2.323-.279.119-.639.178-.928.114-.601-.131-.998-.295-.662-1.172.805-2.106 2.427-3.211 4.355-4.045 1.17-.506 2.339-1.012 3.5-1.538.195-.088.345-.274.515-.415-.128-.129-.234-.299-.386-.381-1.296-.697-2.649-1.302-3.883-2.094-.646-.414-.973-.262-1.481.132a30.524 30.524 0 0 1-2.688 1.847c-2.392 1.474-5.041 1.773-7.775 1.586-.27-.018-.527-.22-.79-.336.136-.275.199-.669.42-.805 1.295-.796 2.554-1.744 3.966-2.233 1.796-.622 3.727-.854 5.6-1.257.181-.039.359-.097.538-.146-.102-.207-.158-.462-.314-.614-1.056-1.031-2.115-2.059-3.218-3.038-.202-.179-.758-.288-.897-.158-1.781 1.662-4.134 1.942-6.292 2.689-1.144.396-2.265.891-3.438 1.162-1.236.286-2.518.429-3.786.496-.777.041-1.009-.485-.516-1.118.383-.491.891-.918 1.419-1.255 2.251-1.437 4.756-2.189 7.375-2.591 1.076-.165 2.161-.27 3.236-.44 1.243-.197 1.373-.435.603-1.371-1.015-1.234-2.171-2.353-3.188-3.586-.528-.64-.913-.466-1.406-.043-.776.664-1.536 1.353-2.359 1.955-2.168 1.585-4.712 2.261-7.259 2.916-.124.032-.262.109-.373.082-.351-.088-.692-.215-1.037-.327.124-.32.163-.726.386-.946 1.432-1.409 3.045-2.571 4.959-3.235a91.494 91.494 0 0 1 4.925-1.574c.69-.197.709-.452.277-.89-.405-.41-.828-.81-1.282-1.164-.708-.551-1.427-1.426-2.183-1.471-.611-.036-1.286.945-1.928 1.48-2.925 2.439-6.213 4.261-9.714 5.717-.289.12-.613.225-.918.219-.437-.009-.871-.127-1.307-.199.123-.41.125-.941.391-1.209 1.075-1.084 2.095-2.324 3.387-3.066 2.201-1.263 4.592-2.196 6.905-3.264.458-.212.923-.409 1.385-.614-.464-.307-.891-.715-1.399-.901-1.318-.483-2.67-.872-4.011-1.289-.517-.161-.909-.137-1.299.406-1.549 2.155-3.718 3.652-5.724 5.332-1.371 1.148-2.976 1.721-4.563 2.377-.244.101-.599-.066-.902-.109.069-.234.115-.479.212-.701.729-1.667 2.153-2.688 3.582-3.638 1.812-1.204 3.724-2.256 5.588-3.383.152-.092.259-.258.387-.39-.2-.076-.416-.244-.596-.212-.556.1-1.123.218-1.643.432-4.01 1.65-8.151 2.157-12.434 1.482-.309-.049-.697-.094-.882-.295-.18-.195-.299-.754-.179-.865.459-.424.979-.869 1.558-1.06 3.197-1.055 6.452-1.57 9.797-.727.432.109.857.291 1.294.324.5.038 1.009-.051 1.514-.085-.242-.409-.477-.822-.725-1.227-1.886-3.07-2.73-6.45-2.934-10.01-.018-.319.211-.652.325-.979.24.18.528.321.712.546 2.502 3.051 3.967 6.552 4.309 10.476.082.942.419 1.143 1.253 1.251 1.131.147 2.232.516 3.355.745.376.077 1.002.341.618-.578-1.2-2.869-1.256-5.984-1.836-8.986-.049-.255.114-.55.178-.827.269.115.654.152.79.356 1.283 1.923 2.25 3.996 2.622 6.296.194 1.198.268 2.415.403 3.623.14 1.25.878 2.068 2.11 1.991.742-.046.969.054 1.023.782.018.238.403.477.659.662.344.248.725.445 1.089.663-.065-.361-.202-.725-.182-1.081.1-1.726.222-3.451.377-5.173.074-.827.21-1.652.374-2.466.056-.275.286-.515.436-.771.208.197.512.355.608.597.971 2.437 1.865 4.899 1.678 7.618z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M18.177 105.823c.059.95-.218 1.156-.762.807-1.498-.961-3.132-1.783-4.427-2.972-1.633-1.5-2.99-3.303-4.446-4.993-.197-.228-.31-.547-.4-.842-.067-.22-.131-.566-.018-.682.13-.133.487-.161.692-.086 2.866 1.051 5.395 2.611 7.284 5.063.58.753 1.076 1.577 1.547 2.404.277.49.43 1.049.53 1.301z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M141.24 125.629c1.344-.061 2.924.294 3.965-.299 1.032-.588 1.575-2.1 2.239-3.26 1.539-2.69 3.329-5.179 5.611-7.286.51-.471 1.095-.897 1.717-1.193.349-.166.976-.183 1.235.029.24.197.31.844.184 1.196-.363 1.017-.79 2.027-1.321 2.966-1.6 2.824-3.61 5.285-6.463 6.955-.201.118-.337.345-.503.522.199.101.389.265.597.294 1.013.142 2.035.222 3.046.376.877.133 1.296-.479 1.706-1.027 1.693-2.256 3.343-4.543 5.02-6.811.915-1.236 1.827-2.476 2.789-3.675.546-.68.943-.576 1.171.268.096.356.17.782.066 1.118-.767 2.474-1.776 4.801-3.947 6.429-1.435 1.076-2.824 2.213-4.222 3.338a.674.674 0 0 0-.235.473c.001.083.263.225.412.232 1.473.077 2.948.118 4.421.197.865.047 1.41-.3 1.836-1.075 1.016-1.847 2.063-3.681 3.197-5.456 1.137-1.779 2.386-3.487 3.614-5.206.166-.232.5-.343.756-.51.187.299.534.6.53.897-.01.807-.027 1.662-.292 2.409-1.143 3.218-3.093 5.869-5.858 7.896-.309.226-.655.402-.966.626-.088.063-.112.216-.165.327.146.059.293.17.437.167.253-.005.52-.159.753-.112 3.403.686 5.058-1.215 6.465-3.974 1.155-2.264 2.76-4.305 4.256-6.381.319-.442 1.025-.605 1.553-.896-.025.533.03 1.086-.09 1.597-.551 2.355-1.62 4.436-3.384 6.128-.65.623-1.287 1.26-1.906 1.913-.159.167-.228.419-.338.632.187.027.383.105.559.073 1.886-.333 3.785-.646 5.174-2.169 1.909-2.094 4.236-3.511 6.987-4.156.778-.182 2.058-.401 2.35-.019.599.779-.477 1.454-.941 2.055-1.491 1.935-3.325 3.367-5.922 3.521-.675.04-1.335.334-2.002.511.523.346 1.041.701 1.571 1.037 2.396 1.52 4.704 3.133 6.055 5.752.099.191.134.447.1.657-.011.066-.368.156-.526.106-1.21-.384-2.537-.596-3.585-1.251-2.001-1.25-3.974-2.621-5.232-4.721-.49-.818-.981-1.172-1.998-.768-.874.347-1.868.387-2.808.568-.244.047-.484.113-.726.17.156.189.274.452.474.556 3.739 1.935 5.305 5.374 6.329 9.175.104.386-.038.839-.065 1.261-.431-.055-.996.044-1.271-.193-.96-.828-2.025-1.645-2.676-2.698-1.411-2.281-2.573-4.715-3.889-7.057-.171-.304-.649-.619-.984-.617-1.667.006-3.333.111-4.999.198-.137.007-.268.14-.402.215.073.093.127.215.22.276 3.404 2.201 5.361 5.614 7.459 8.91.138.217.317.424.387.662.06.2-.01.44-.023.662-.183-.02-.42.028-.542-.069-1.939-1.542-3.994-2.969-5.754-4.696-1.632-1.601-2.979-3.502-4.379-5.327-.338-.441-.618-.738-1.179-.803-1.89-.218-3.775-.476-5.665-.701-.14-.017-.297.107-.446.166.118.133.229.273.355.398 1.405 1.397 2.901 2.714 4.194 4.207 1.38 1.593 2.574 3.349 3.833 5.046.09.122.103.475.055.496-.219.094-.54.226-.703.132-1.164-.668-2.434-1.236-3.416-2.12-2.514-2.262-5.121-4.488-7.241-7.095-1.147-1.41-2.122-1.662-3.624-1.33-.656.145-1.322.244-1.983.363.509.476.957 1.054 1.539 1.411 1.931 1.183 3.178 2.949 4.357 4.804.721 1.134 1.528 2.213 2.27 3.333.154.233.192.544.284.818-.282-.017-.627.066-.836-.066-4.023-2.555-7.831-5.364-10.461-9.454-.498-.775-1.014-1.138-1.977-1.048-1.211.114-2.44.029-3.662.038-.125.001-.249.051-.374.078.088.147.14.373.268.431 3.661 1.667 5.342 5.224 7.717 8.113.153.186.072.565.1.855-.294-.01-.628.07-.874-.043-2.287-1.046-4.376-2.375-6.156-4.193-1.697-1.733-3.479-3.384-5.253-5.038-.193-.18-.585-.196-.886-.202-.576-.011-1.16-.004-1.729.079-.555.081-1.095.267-1.641.407.365.347.707.724 1.1 1.036 2.857 2.275 4.79 5.315 6.855 8.248.369.524.81 1 1.141 1.546.134.222.063.569.085.859-.291-.03-.631.028-.866-.104-3.226-1.807-6.005-4.155-8.273-7.078-1.016-1.31-1.92-2.708-2.911-4.038-.196-.262-.55-.549-.848-.568-1.472-.095-2.95-.111-4.426-.135-.157-.002-.315.122-.473.187.113.12.212.259.342.356 3.205 2.388 4.774 5.96 6.674 9.286.124.218-.015.586-.032.885-.28-.101-.608-.138-.832-.311-3.355-2.599-6.51-5.392-8.414-9.297-.359-.735-.835-.885-1.543-.735-.869.183-1.741.349-2.611.528-.684.141-1.365.293-2.048.44.476.447.991.859 1.419 1.348.759.866 1.513 1.744 2.184 2.678a142.418 142.418 0 0 1 3.469 5.076c.155.237.046.648.059.979-.287-.036-.621.011-.854-.121-2.132-1.204-4.064-2.679-5.71-4.494-1.203-1.327-2.339-2.718-3.488-4.094-.503-.602-.966-1.194-1.885-.712-.21.11-.523.009-.758.091-.87.302-1.727.641-2.588.966.622.44 1.284.834 1.86 1.328 1.768 1.517 3.282 3.25 4.282 5.382.092.196.067.448.096.674-.296-.014-.67.084-.874-.06-1.254-.883-2.512-1.769-3.685-2.755a37.724 37.724 0 0 1-3.204-3.042c-.717-.762-1.378-.831-2.17-.216-.152.118-.316.223-.46.351-.664.587-1.323 1.18-1.984 1.771.83.207 1.67.383 2.489.627 1.345.399 2.742.729 3.694 1.887.182.222.234.551.346.83-.278.11-.571.343-.832.312-2.093-.253-4.197-.469-6.26-.888-.771-.156-1.152-.267-1.315.63-.041.228-.406.397-.622.593-.129-.462-.517-1.138-.342-1.35.866-1.055.518-2.058.152-3.13a123.083 123.083 0 0 1-1.522-4.737c-.143-.481-.18-1.015-.16-1.52.03-.741.402-.921.981-.503.866.624 1.401 1.482 1.637 2.524.252 1.118.543 2.229.732 3.358.123.735.289.616.79.261 1.35-.955 2.681-1.993 4.163-2.69 1.429-.672 3.041-.95 4.568-1.417.739-.226 1.694-.24 1.573-1.427 2.384-3.708 4.085-7.859 7.135-11.13.483-.518 1.455-1.278 1.779-1.11.908.469.438 1.422.167 2.21-1.314 3.821-3.314 7.175-6.557 9.687-.152.118-.308.239-.429.386-.117.142-.19.32-.283.483.179.033.367.119.536.09 1.881-.326 3.764-.644 5.631-1.039.281-.06.532-.476.711-.778 1.524-2.583 2.927-5.244 4.574-7.745 1.043-1.584 2.208-3.175 4.039-4.018.254-.117.561-.119.843-.174.01.307.104.64.018.917-1.031 3.338-2.396 6.483-5.194 8.777-.298.244-.583.51-.837.799-.544.619-1.063 1.259-1.592 1.891.779.002 1.62-.185 2.327.043 2.181.705 3.235-.611 4.223-2.133a276.417 276.417 0 0 0 2.467-3.885c1.684-2.691 3.802-5 6.195-7.066.241-.208.498-.421.784-.549.326-.146.799-.375 1.014-.246.226.136.385.709.29.997-.516 1.564-.939 3.2-1.73 4.624-1.721 3.1-4.495 5.219-7.327 7.238-.154.11-.369.14-.508.263-.126.112-.187.298-.277.451.112.06.224.175.335.173 1.723-.028 3.454.007 5.164-.165.444-.045.863-.718 1.221-1.162 2.215-2.75 4.39-5.531 6.619-8.27a24.282 24.282 0 0 1 2.505-2.655c.309-.281.988-.466 1.341-.319.646.27.523.915.279 1.499-.999 2.392-2.28 4.618-4.257 6.318-1.648 1.418-3.444 2.663-5.165 3.997-.183.142-.302.365-.451.55.227.059.454.168.681.168 1.414-.001 2.833-.114 4.239-.015 1.14.081 1.787-.462 2.374-1.291 1.444-2.039 2.813-4.142 4.395-6.069 1.297-1.581 2.849-2.953 4.309-4.397.268-.265.615-.496.968-.616.391-.134.832-.123 1.251-.175-.017.403.066.844-.068 1.203-1.389 3.721-3.873 6.604-7.016 8.943-.867.645-1.852 1.132-2.769 1.712-.141.089-.209.294-.311.445.168.035.339.108.504.098 1.151-.067 2.301-.152 3.452-.231l.007.131z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M182.555 126.252l-1.446-.189c.427-.436.803-.943 1.291-1.296 1.59-1.15 3.382-1.779 5.347-1.93 1.147-.088 2.288-.269 3.436-.337.263-.016.544.259.817.4-.147.256-.248.557-.448.76-1.373 1.396-3.146 1.931-5.007 2.206-1.204.179-2.425.24-3.99.386z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M80.716 100.751c.688-1.33-.402-2.121-1.339-3.032-1.788-1.738-3.568-3.489-5.256-5.323-.637-.692-1.047-1.607-1.484-2.46-.18-.352-.16-.807-.232-1.215.402.049.854-.005 1.2.162 2.729 1.319 4.854 3.299 6.364 5.941.39.681.85 1.322 1.279 1.981.191-.721.387-1.44.571-2.162.11-.432.184-.873.3-1.303.709-2.629.715-2.632-1.402-4.494-1.395-1.226-2.873-2.369-4.175-3.687-.794-.804-1.352-1.853-1.948-2.833-.134-.221-.084-.679.067-.903.095-.14.552-.114.818-.048 3.657.907 5.86 3.443 7.435 6.681.115.237.304.439.459.657.127-.203.311-.391.37-.612.164-.616.304-1.242.406-1.872.544-3.376.323-3.745-2.623-5.439-2.115-1.216-4.132-2.587-5.686-4.522-.241-.3-.516-.596-.658-.943-.133-.325-.111-.714-.158-1.075.304-.038.647-.187.906-.095 1.255.445 2.582.8 3.7 1.486 1.121.687 2.022 1.731 3.027 2.609.316.276.655.524.983.785-.036-.368-.066-.737-.111-1.104-.039-.318-.159-.639-.134-.951.178-2.281-1.157-3.427-3.03-4.279a23.071 23.071 0 0 1-3.323-1.885c-1.013-.684-1.627-2.089-1.301-2.598.267-.416 2.058-.466 2.915.095 1.063.696 2.012 1.565 3.018 2.351.117.091.279.123.421.183.008-.123.044-.252.021-.369-.289-1.418-.628-2.651-1.85-3.786-2.13-1.98-3.55-4.53-3.525-7.622.009-1.117.308-1.334 1.223-.779 2.308 1.4 3.953 3.209 3.86 6.173-.031.994.277 2.005.478 2.998.189.938.435 1.864.669 2.792.051.202.161.388.244.582.057-.175.121-.348.171-.525.364-1.289.78-2.566 1.074-3.871.374-1.658 1.409-2.838 2.598-3.937.445-.411.902-.782 1.512-.318.516.393.595.871.428 1.527-.612 2.408-1.732 4.581-3.436 6.323-2.35 2.402-1.698 5.003-1.138 7.488.026.114.137.209.209.313.101-.116.243-.217.298-.352 1.407-3.523 4.224-5.73 7.235-7.745.331-.221.764-.288 1.151-.427.018.436.191.944.028 1.295-.717 1.545-1.383 3.151-2.36 4.526-.719 1.012-1.886 1.709-2.865 2.532-.686.576-1.395 1.126-2.091 1.69-1.064.863-1.343 1.967-1.031 3.273.117.491.159 1 .25 1.498.051.281.133.556.201.834.184-.165.414-.299.544-.498 2.087-3.202 5.447-4.491 8.76-5.844.196-.08.457 0 .688.006-.037.228.005.527-.124.675-1.557 1.775-2.979 3.72-4.765 5.23-1.582 1.337-3.579 2.18-5.386 3.252-.236.14-.558.305-.628.526-.696 2.189-1.349 4.392-2.006 6.593-.051.171-.036.361-.052.542.153-.084.356-.131.452-.258 2.497-3.28 6.331-4.464 9.774-6.256.792-.412 1.598-.8 2.42-1.146.192-.081.473.051.713.084-.042.181-.033.401-.135.538-1.208 1.64-2.208 3.522-3.7 4.846-2.819 2.502-5.941 4.648-9.478 6.104-.384.158-.747.673-.868 1.095-.19.663-.171 1.387-.232 2.085-.082.93.196.876.924.471 1.269-.706 2.624-1.261 3.96-1.839.192-.083.48.057.724.094-.116.243-.195.513-.352.725-1.271 1.71-2.641 3.313-4.644 4.219-.169.076-.354.185-.456.332-.201.29-.349.617-.519.928-.416-.268-.921-.458-1.234-.816a260.318 260.318 0 0 1-5.336-6.302c-.267-.327-.281-.862-.412-1.301.543.02 1.243-.171 1.602.096 1.328.989 2.55 2.122 3.796 3.219.236.207.373.53.614.727.073.06.489-.105.5-.197.072-.63.081-1.274.123-2.139z"
                fill="#678A78"
                data-color="1"
              ></path>
              <path
                d="M79.897 133.234c0 1.538.018 3.077-.019 4.615-.006.237-.269.468-.413.702-.159-.18-.443-.35-.457-.54-.09-1.206-.186-2.417-.157-3.624.044-1.789.113-3.585.314-5.361.236-2.081.612-4.148.966-6.214.038-.225.325-.408.497-.611.124.275.387.571.35.823-.208 1.44-.556 2.861-.727 4.305-.231 1.957-.346 3.929-.51 5.894l.156.011z"
                fill="#678A78"
                data-color="1"
              ></path>
            </g>
          </svg>
        </Link>
      </Logo>
      <NavigationList open={isNavOpened}>
        <li>
          <Link
            activeStyle={activeLink}
            onClick={() => setNav(false)}
            to="/o-mnie"
          >
            o mnie
          </Link>
        </li>
        <li>
          <Link
            activeStyle={activeLink}
            onClick={() => setNav(false)}
            to="/dziennik"
          >
            dziennik
          </Link>
        </li>
        <li>
          <Link
            activeStyle={activeLink}
            onClick={() => setNav(false)}
            to="/video"
          >
            video
          </Link>
        </li>
        <li>
          <Link
            activeStyle={activeLink}
            onClick={() => setNav(false)}
            to="/oferta"
          >
            oferta
          </Link>
        </li>
        <li>
          <Link
            activeStyle={activeLink}
            onClick={() => setNav(false)}
            to="/kontakt"
          >
            kontakt
          </Link>
        </li>
        <li>
          <a href="https://www.instagram.com/lacri.mae" target="_blank"></a>
        </li>
      </NavigationList>
      <Hamburger onClick={() => setNav(!isNavOpened)}>
        <img src={hamburgerIcon} />
      </Hamburger>
    </NavigationWrapper>
  )
}

export default Navigation
