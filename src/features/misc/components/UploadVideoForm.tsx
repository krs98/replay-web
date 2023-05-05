'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '~/components/Elements/Input'
import { redirect, useSearchParams } from 'next/navigation'

const UploadVideoSchema = z.object({
  name: z
    .string()
    .min(5, { message: 'The name is too short! It must contain at least 5 characters.' })
    .max(40, {
      message: 'The name is too long! It must not contain more than 40 characters.',
    }),
})

type UploadVideoSchema = z.infer<typeof UploadVideoSchema>

export default function UploadVideoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadVideoSchema>({
    resolver: zodResolver(UploadVideoSchema),
  })

  const searchParams = useSearchParams()
  const repo = searchParams.get('repo')
  if (!repo) {
    redirect('/new')
  }

  function onSubmit({ name }: UploadVideoSchema) {
    console.log({ name, repo })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-12">
        <div className="mb">
          <label className="block text-gray">Title</label>
        </div>
        <Input className="border-b border-gray-2" registration={register('name')} />
      </div>
      <div>
        <button className="group bg-yellow hover:bg-black inline-block px-8 py-2 rounded-full border-2 border-yellow">
          {/*<Link
            className="flex items-center text-black group-hover:text-yellow"
          href="/new"
          >*/}
          <span className="font-bold">Upload</span>
          {/*</Link>*/}
        </button>
      </div>
    </form>
  )
}
