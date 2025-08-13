import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

export default function FAQ_Questions() {
    return (
        <>
            <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl ">
                <Disclosure as="div" className="p-6" defaultOpen={true}>
                    <DisclosureButton className="group flex w-full items-center justify-between ">
                        <span className="text-[22px]/6 font-[350] text-white group-data-hover:text-white/80">
                            How does this app boost productivity?
                        </span>

                    </DisclosureButton>
                    <DisclosurePanel className="mt-4 text-[14px]/5 text-white/50">
                        It helps you stay focused with task lists, goal tracking, and smart reminders all in one place.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-6">
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-[22px]/6 font-[350] text-white group-data-hover:text-white/80">
                            Can I use it on multiple devices?
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-4 text-[14px]/5 text-white/50">
                        Yes, your data syncs across mobile, tablet, and desktop.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-6">
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-[22px]/6 font-[350] text-white group-data-hover:text-white/80">
                            Can I customize it to fit my style?
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-4 text-[14px]/5 text-white/50">
                        Yes! You can adjust task types, timers, and layouts to match your workflow.
                    </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="p-6">
                    <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-[22px]/6 font-[350] text-white group-data-hover:text-white/80">
                            Is my data secure?
                        </span>
                    </DisclosureButton>
                    <DisclosurePanel className="mt-4 text-[14px]/5 text-white/50">
                        Absolutely. Your data is encrypted and private — we never sell it.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </>
    )
}
