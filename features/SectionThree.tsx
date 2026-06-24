import { table } from "@/constants"

export default function SectionThree() {
  return (
    <section className='w-full flex flex-col gap-20 px-4 py-20 lg:px-10 border-t border-text-body  2xl:max-w-380 2xl:mx-auto'>
        <div className='text-center flex flex-col gap-7.5'>
            <p className='text-[12px] text-text-caption font-roboto'>Specs</p>
            <h1 className='text-[60px] font-head leading-[95%]'>Why Choose Area?</h1>
            <p className='font-body text-15 text-text-body leading-140'>You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach <span className='hidden lg:inline'><br/></span> to streamline your business. </p>
            <div>
                <button className="bg-brand-main-03 px-5.5 py-3.5 rounded-full font-bold font-body text-14">
                    Discover More
                </button>
            </div>

        </div>

        <div className="overflow-x-auto">
            <table className="min-w-225 lg:min-w-full border-separate border-spacing-0 ">
                <thead>
                <tr className="">
                    {table.map((column, index) => (
                    <th
                        key={index}
                        className={`
                             py-8 text-center border-b 
                            ${
                                index === 0
                                ? "font-body  tracking-[-8%] border-l border-r border-t border-t-brand-main-02 border-l-brand-main-02 border-r-brand-main-02  shadow-[3px_0_8px_rgba(0,0,0,0.04)] rounded-tl-[20px] rounded-tr-[20px] "
                                : " "
                            
                            }
                            ${
                                index === 1
                                ? "text-text-body font-[23px] font-rethink tracking-[-8%]"
                                : ""
                            }
                            ${
                                index === 2
                                ? "text-text-body font-[23px] font-reddit  tracking-[-8%]"
                                : ""
                            }
                            
                        `}
                    >
                        <h2 className="font-medium text-[26px] ">{column.column}</h2>
                    </th>
                    ))}
                </tr>
                </thead>

                <tbody className="">
                {table[0].rows.map((_, rowIndex) => (
                    <tr key={rowIndex}>
                    {table.map((column, columnIndex) => {
                        const row = column.rows[rowIndex];

                        return (
                        <td
                            key={columnIndex}
                            className={`border border-brand-main-02 py-8 px-7.5 

                                ${
                                    columnIndex === 0
                                    ? " shadow-[3px_0_8px_rgba(0,0,0,0.04)]  "
                                    : ""
                                }
                                ${
                                    columnIndex === 0 && rowIndex === table[0].rows.length - 1
                                        ? "rounded-bl-[20px] rounded-br-[20px]"
                                        : ""
                                }
                                 ${
                                    columnIndex === 1
                                    ? "  border-l-0 "
                                    : ""
                                }
                                ${
                                    columnIndex === 2
                                    ? "  border-r-0 "
                                    : ""
                                }
                                
                            `}
                        >
                            <div className="flex items-center gap-2">
                            {row.icon && <row.icon size={18} className="text-brand-main-05"/>}
                            <p className="font-body">{row.text} </p>
                            </div>
                        </td>
                        );
                    })}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </section>
  )
}
