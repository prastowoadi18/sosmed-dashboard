import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CirclePlus } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

import { IPayloadComment } from '@/types';
import { FormCommentValues, formCommentSchema } from '@/lib/validation';
import { addComment } from '@/services/api';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';

const AddComment = () => {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const form = useForm<IPayloadComment>({
    resolver: zodResolver(formCommentSchema),
    defaultValues: {
      body: '',
      email: '',
      postId: 0,
      name: '',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  const addCommentMutation = useMutation({
    mutationFn: (data: IPayloadComment) => addComment(data),

    onSuccess: async (data: any) => {
      toast.success(`Success add comment ${data.title}.`);
      await queryClient.invalidateQueries({ queryKey: ['comments'] });
      setOpen(false);
    },

    onSettled: async (_, error: any) => {
      toast.error(error.response.data.msg);
    },
  });

  const onSubmit: SubmitHandler<FormCommentValues> = (data) => {
    addCommentMutation.mutate(data);
  };

  useEffect(() => {
    reset({
      body: '',
      name: '',
      email: '',
      postId: 0,
    });
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="secondary" className="rounded-full">
          <CirclePlus className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Post</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            quia.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Helo"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={isSubmitting}
                      placeholder="Helo@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Body</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Lorem ipsum dolor sit amet."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postId"
              render={({ field: { value, ...fieldValues } }) => (
                <FormItem>
                  <FormLabel>Post ID</FormLabel>
                  <FormControl>
                    <Input
                      {...fieldValues}
                      disabled={isSubmitting}
                      placeholder="23"
                      onChange={(e) => {
                        const value = e.target.value;
                        fieldValues.onChange(Number(value));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Comment</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddComment;
