import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { EntryI } from '../../../../shared/interfaces/entry'
import { createEntry } from '../../service'
import { Form, Error, Label, Input, Textarea, Submit } from './styles'

interface Props {
  latitude: number
  longitude: number
  onClose(): void
}

const EntryForm: React.FC<Props> = ({ latitude, longitude, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { register, handleSubmit } = useForm()

  const onSubmit = async (data: EntryI) => {
    try {
      setLoading(true)
      const body = { ...data, latitude, longitude }
      await createEntry(body)
      onClose()
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {error && <Error>{error}</Error>}
      <Label htmlFor="title">Title</Label>
      <Input name="title" required ref={register} />
      <Label htmlFor="comments">Comments</Label>
      <Textarea name="comments" rows={3} ref={register}></Textarea>
      <Label htmlFor="description">Description</Label>
      <Textarea name="description" rows={3} ref={register}></Textarea>
      <Label htmlFor="image">Image</Label>
      <Input name="image" ref={register} />
      <Label htmlFor="visitDate">Visit Date</Label>
      <Input name="visitDate" type="date" required ref={register} />
      <Submit disabled={loading}>
        {loading ? 'Loading...' : 'Create Entry'}
      </Submit>
    </Form>
  )
}

export default EntryForm
