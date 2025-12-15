import { createIcon } from "@/components/ui/icon";
import {
  Circle,
  Ellipse,
  Defs,
  G,
  Mask,
  Path,
  Rect,
  ClipPath,
} from "react-native-svg";

const AccordionIcon = createIcon({
  viewBox: "0 0 212 147",
  path: (
    <>
      <G
        opacity={0.1}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Rect
          width={202.822}
          height={31}
          rx={15.5}
          fill="#fff"
          transform="matrix(-1 0 0 1 260.423 13.387)"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.231}
          d="m43.705 24.054-7.568 8.079-8.079-8.079"
        />
        <Rect
          width={202.822}
          height={31}
          rx={15.5}
          fill="#fff"
          transform="matrix(-1 0 0 1 260.423 57.773)"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.231}
          d="m43.705 68.441-7.568 8.078-8.079-8.078"
        />
        <Rect
          width={202.822}
          height={31}
          rx={15.5}
          fill="#fff"
          transform="matrix(-1 0 0 1 260.423 102.158)"
        />
        <Path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3.231}
          d="m43.705 114.047-7.568 8.078-8.079-8.078"
        />
      </G>
    </>
  ),
});

const AlertIcon = createIcon({
  viewBox: "0 0 193 149",
  path: (
    <>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <G clipPath="url(#a)">
          <Path
            fill="#fff"
            d="M17.538 26.308c.497 0 .914-.169 1.251-.505a1.69 1.69 0 0 0 .503-1.25v-7.015c0-.496-.168-.913-.505-1.248a1.705 1.705 0 0 0-1.248-.505 1.687 1.687 0 0 0-1.25.505 1.7 1.7 0 0 0-.504 1.248v7.016c0 .497.168.914.505 1.25a1.69 1.69 0 0 0 1.248.504Zm0-14.031c.497 0 .914-.168 1.251-.505a1.69 1.69 0 0 0 .503-1.249 1.706 1.706 0 0 0-.505-1.249 1.693 1.693 0 0 0-1.248-.505c-.497 0-.914.169-1.25.505a1.705 1.705 0 0 0-.504 1.25c-.002.495.167.912.505 1.25.338.338.754.505 1.248.503Zm0 22.8c-2.426 0-4.706-.46-6.84-1.382-2.133-.921-3.99-2.17-5.568-3.748-1.578-1.577-2.828-3.433-3.748-5.569-.92-2.134-1.38-4.415-1.382-6.84-.001-2.425.46-4.704 1.382-6.84.923-2.135 2.172-3.99 3.748-5.568 1.576-1.577 3.432-2.827 5.568-3.748C12.835.461 15.115 0 17.538 0c2.424 0 4.704.46 6.84 1.382 2.137.921 3.993 2.17 5.569 3.748 1.576 1.577 2.826 3.433 3.75 5.568.923 2.136 1.384 4.415 1.38 6.84-.003 2.425-.464 4.706-1.382 6.84-.918 2.136-2.167 3.992-3.748 5.569-1.58 1.577-3.437 2.827-5.569 3.75-2.131.922-4.411 1.382-6.84 1.38Z"
          />
        </G>
        <Rect width={200} height={32} x={47} fill="#FBFBFB" rx={16} />
        <Rect
          width={200}
          height={32}
          x={47.074}
          y={45}
          fill="#FBFBFB"
          opacity={0.5}
          rx={16}
        />
        <G fill="#FBFBFB" opacity={0.5}>
          <Rect width={24} height={24} x={49.074} y={93} rx={12} />
          <Rect width={200} height={24} x={85.074} y={93} rx={12} />
          <Rect width={24} height={24} x={49.074} y={125} rx={12} />
          <Rect width={200} height={24} x={85.074} y={125} rx={12} />
        </G>
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h35v35H0z" />
        </ClipPath>
      </Defs>
    </>
  ),
});

const AlertDialogIcon = createIcon({
  viewBox: "0 0 190 141",
  path: (
    <>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Rect
          width={270.6}
          height={138.028}
          x={1.01}
          y={1.01}
          stroke="#fff"
          strokeWidth={2.019}
          rx={30.978}
        />
        <Rect
          width={240.309}
          height={20.194}
          x={16.155}
          y={24.232}
          fill="#fff"
          rx={10.097}
        />
        <Rect
          width={240.309}
          height={20.194}
          x={16.155}
          y={52.504}
          fill="#fff"
          rx={10.097}
        />
        <Rect
          width={79}
          height={31}
          x={16.155}
          y={84.814}
          fill="#fff"
          rx={15.5}
        />
        <Rect
          width={81.019}
          height={33.019}
          x={102.223}
          y={83.805}
          stroke="#fff"
          strokeWidth={2.019}
          rx={16.51}
        />
      </G>
    </>
  ),
});

const AvatarIcon = createIcon({
  viewBox: "0 0 193 174",
  path: (
    <>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Circle cx={149} cy={38} r={37.25} stroke="#fff" strokeWidth={1.5} />
        <Mask
          id="a"
          width={76}
          height={76}
          x={111}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <Circle cx={149} cy={38} r={38} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#a)">
          <Ellipse cx={149} cy={66.88} fill="#fff" rx={28.88} ry={16.72} />
        </G>
        <Circle cx={149} cy={32.303} r={13.68} fill="#fff" />
      </G>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Circle cx={63.5} cy={108.5} r={62.5} stroke="#fff" strokeWidth={2} />
        <Mask
          id="b"
          width={127}
          height={127}
          x={0}
          y={45}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <Circle cx={63.5} cy={108.5} r={63.5} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#b)">
          <Ellipse cx={63.499} cy={156.762} fill="#fff" rx={48.26} ry={27.94} />
        </G>
        <Circle cx={63.5} cy={98.979} r={22.86} fill="#fff" />
        <Path
          fill="#fff"
          stroke="#408C61"
          strokeWidth={10.552}
          d="M107.332 136.319c8.742 0 15.828 7.087 15.828 15.828 0 8.742-7.086 15.829-15.828 15.829-8.741 0-15.828-7.087-15.828-15.829 0-8.741 7.087-15.828 15.828-15.828Z"
        />
      </G>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Circle cx={174} cy={122} r={37.25} stroke="#fff" strokeWidth={1.5} />
        <Mask
          id="c"
          width={76}
          height={76}
          x={136}
          y={84}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <Circle cx={174} cy={122} r={38} fill="#C4C4C4" />
        </Mask>
        <G mask="url(#c)">
          <Ellipse cx={174} cy={150.88} fill="#fff" rx={28.88} ry={16.72} />
        </G>
        <Circle cx={174} cy={116.303} r={13.68} fill="#fff" />
      </G>
    </>
  ),
});
const FormControllIcon = createIcon({
  viewBox: '0 0 186 127',
  path: (
    <>
      <G
        opacity={0.15}
        style={{
          mixBlendMode: 'overlay',
        }}
      >
        <Rect width={146} height={27} fill="#fff" rx={13.5} />
        <Path
          stroke="#fff"
          strokeWidth={1.748}
          d="M14 39.874h202c7.249 0 13.126 5.877 13.126 13.126v14c0 7.25-5.877 13.126-13.126 13.126H14C6.75 80.126.874 74.249.874 67V53c0-7.25 5.877-13.126 13.126-13.126Z"
        />
        <Rect
          width={11}
          height={12}
          x={16.485}
          y={58.01}
          fill="#fff"
          rx={5.5}
        />
        <Rect width={12} height={12} x={39.024} y={58.01} fill="#fff" rx={6} />
        <Rect
          width={11}
          height={12}
          x={62.564}
          y={58.01}
          fill="#fff"
          rx={5.5}
        />
        <Rect width={12} height={12} x={85.103} y={58.01} fill="#fff" rx={6} />
        <Rect
          width={11}
          height={12}
          x={108.642}
          y={58.01}
          fill="#fff"
          rx={5.5}
        />
        <Rect width={79} height={31} x={63.922} y={93} fill="#fff" rx={15.5} />
        <Rect
          width={81.019}
          height={33.019}
          x={149.99}
          y={91.99}
          stroke="#fff"
          strokeWidth={2.019}
          rx={16.51}
        />
      </G>
      ;
    </>
  ),
});

export { AccordionIcon, AlertIcon, AvatarIcon, AlertDialogIcon, FormControllIcon };
