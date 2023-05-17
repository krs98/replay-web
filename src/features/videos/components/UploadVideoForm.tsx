'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { redirect, useSearchParams } from 'next/navigation'
import uploadVideo from '../api/uploadVideo'
import { Button } from '~/components/Elements'
import { InputField } from '~/components/Form'
import { useState } from 'react'

const UploadVideoSchema = z.object({
  title: z
    .string()
    .min(5, { message: 'The name is too short! It must have at least 5 characters.' })
    .max(40, {
      message: 'The name is too long! It must have at most 40 characters.',
    }),
  description: z.string().optional(),
})

export type UploadVideoSchema = z.infer<typeof UploadVideoSchema>

function useImportingRepo() {
  const searchParams = useSearchParams()
  const repo = searchParams.get('repo')
  if (!repo) {
    redirect('/new')
  }

  return repo
}

export default function UploadVideoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadVideoSchema>({
    resolver: zodResolver(UploadVideoSchema),
  })

  const [loading, setLoading] = useState(false)

  const repo = useImportingRepo()
  async function onSubmit({ title, description }: UploadVideoSchema) {
    setLoading(true)
    await uploadVideo({ title, description, repo })
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className="mb-8 w-1/2"
        label="Title"
        placeholder="A title for your video"
        registration={register('title')}
        error={errors.title}
        required
      />
      <InputField
        className="mb-8 w-1/2"
        label="Description"
        placeholder="A description for your video"
        registration={register('description')}
        error={errors.description}
      />
      <div>
        <Button disabled={loading}>{loading ? 'Uploading...' : 'Upload'}</Button>
      </div>
    </form>
  )
}
