import { useDisclosure } from '@mantine/hooks'
import { Group, Modal } from '@mantine/core'
import FormBus from './FormBus'

type Props = {
  busId: string
  children: React.ReactNode
}

export default function EditBus({
  busId,
  children,
}: Props) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[22px] text-[#095BA8] font-bold">
              Edit Bus
            </h1>
            <span className="h-[1px] w-[200px] bg-[#095BA8]/30"></span>
          </div>
        }
        centered
        padding="xl">
        <FormBus
          type="edit"
          busId={busId}
          onClose={close}
        />
      </Modal>

      <Group onClick={open}>{children}</Group>
    </>
  )
}
