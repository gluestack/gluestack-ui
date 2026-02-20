import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Calendar } from '@/components/ui/calendar';
import { CalendarHeader } from '@/components/ui/calendar';
import { CalendarHeaderPrevButton } from '@/components/ui/calendar';
import { CalendarHeaderNextButton } from '@/components/ui/calendar';
import { CalendarHeaderTitle } from '@/components/ui/calendar';
import { CalendarWeekDaysHeader } from '@/components/ui/calendar';
import { CalendarBody } from '@/components/ui/calendar';
import { CalendarGrid } from '@/components/ui/calendar';
import { CalendarWeek } from '@/components/ui/calendar';
import { CalendarDay } from '@/components/ui/calendar';
import { CalendarDayText } from '@/components/ui/calendar';
import { Icon } from '@/components/ui/icon';
import { ChevronLeftIcon } from '@/components/ui/icon';
import { ChevronRightIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [selected, setSelected] = React.useState(new Date());

  return (
    <Calendar mode="single" value={selected} onValueChange={setSelected}>
      <CalendarHeader>
        <CalendarHeaderPrevButton>
          <Icon as={ChevronLeftIcon} />
        </CalendarHeaderPrevButton>
        <CalendarHeaderTitle />
        <CalendarHeaderNextButton>
          <Icon as={ChevronRightIcon} />
        </CalendarHeaderNextButton>
      </CalendarHeader>

      <CalendarWeekDaysHeader />

      <CalendarBody>
        <CalendarGrid>
          {/* Calendar will auto-render the grid */}
        </CalendarGrid>
      </CalendarBody>
    </Calendar>
  );
}`}
      argTypes={{}}
      reactLive={{ Calendar, CalendarHeader, CalendarHeaderPrevButton, CalendarHeaderNextButton, CalendarHeaderTitle, CalendarWeekDaysHeader, CalendarBody, CalendarGrid, CalendarWeek, CalendarDay, CalendarDayText, Icon, ChevronLeftIcon, ChevronRightIcon }}
    />
  );
}